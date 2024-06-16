import { useState, useRef, useEffect, useContext } from 'react';
import {EDIT_BUDGET} from '../reducers/BudgetReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faMinus } from '@fortawesome/free-solid-svg-icons';
import { BudgetContext } from '../context/BudgetContext';

function EditBudgetItem({categoryKey, isEditing, setIsEditing}) {
    const [editText, setEditText] = useState("");
    const [editAmount, setEditAmount] = useState("");
    const {dispatch} = useContext(BudgetContext);

    const inputNameRef = useRef();
    useEffect(() => {
        inputNameRef.current.focus();
    }, [])


    const handleEditBudget = () => {
        if (editText.trim() === '' || editAmount.trim() === '') return;
        const itemId = isEditing;
        // console.log(itemId);
        dispatch({key: categoryKey, type: EDIT_BUDGET, payload: { id: itemId, text: editText, amount: editAmount } });
        setIsEditing(null);
    };

    return ( 
        <>
        <div className='budget-item__actions'>
            <button className="delete-btn">
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="edit-btn" onClick={handleEditBudget}>
                <FontAwesomeIcon icon={faTicket} />
            </button>
        </div>
            <input
            className='edit-input-name'
            type="text"
            placeholder={categoryKey.slice(0,1).toUpperCase() + categoryKey.slice(1)}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            ref={inputNameRef}
            />
            <input
             type='number' 
             className='edit-input-amount' 
             placeholder='Amount'
             value={editAmount} onChange={(e) => setEditAmount(e.target.value)} />
        </>
    );
}

export default EditBudgetItem;