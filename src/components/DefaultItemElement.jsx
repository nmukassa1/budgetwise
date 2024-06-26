import { useContext } from 'react';
import {BudgetContext} from '../context/BudgetContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'

function DefaultItemElement({item, setEditMode, setEditItemId, removeItem}) {

    const {state, dispatch} = useContext(BudgetContext);

    function handleEdit(){
        setEditMode(true);
        setEditItemId(item.id)
    }
    function deleteItem(){ 
        dispatch({type: removeItem, payload: {id: item.id}})
    }

    return ( 
        <>
        <div className="budget-item__actions">
            <button className="delete-btn" onClick={deleteItem}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="edit-btn" onClick={handleEdit}>
                <FontAwesomeIcon icon={faPencil} />
            </button>
        </div>
        <div className="budget-item__name">{item.name}</div>
        <div className="budget-item__amount">{
            item.amount !== undefined ? item.amount.toLocaleString('en-UK', {style: 'currency', currency: 'GBP'}) : ''    
        }</div>
        </>
     );
}

export default DefaultItemElement;