import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMinus } from '@fortawesome/free-solid-svg-icons'

import EditBudgetItem from './EditBudgetItem'

function BudgetLisiItem({item, categoryKey, isEditing, setIsEditing}) {

    function handleEdit(){
        console.log('Edit')
    }
    function handleDelete(){ }
    return ( 
            <li>
                {isEditing == item.id ? (
                    <EditBudgetItem categoryKey={categoryKey} isEditing={isEditing} setIsEditing={setIsEditing} />
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