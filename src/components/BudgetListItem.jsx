import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'
import {BudgetContext} from '../context/BudgetContext'
import EditBudgetItem from './EditBudgetItem'
import { useContext } from 'react';

function BudgetLisiItem({item, categoryKey, isEditing, setIsEditing, removeItem}) {

    const {dispatch} = useContext(BudgetContext);

    function handleEdit(){
        setIsEditing(item.id);
    }
    function handleDelete(){ 
        dispatch({type: removeItem, payload: {id: item.id}})
    }
    return ( 
            <li>
                {isEditing == item.id ? (
                    <EditBudgetItem categoryKey={categoryKey} removeItem={removeItem} itemId={item.id} isEditing={isEditing} setIsEditing={setIsEditing} defaultName={item.name} defaultAmount={item.amount} />
                ):(
                    <>
                    <div className="budget-item__actions">
                        <button className="delete-btn" onClick={handleDelete}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className="edit-btn" onClick={handleEdit}>
                            <FontAwesomeIcon icon={faPencil} />
                        </button>
                    </div>
                    <div className="budget-item__name">{item.name}</div>
                    <div className="budget-item__amount">{item.amount}</div>
                    </>
                )}
            </li>
)}

export default BudgetLisiItem