import { useState, useRef, useEffect, useContext } from 'react';
import {EDIT_BUDGET} from '../reducers/BudgetReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { BudgetContext } from '../context/BudgetContext';

function EditBudgetItem({categoryKey, isEditing, setIsEditing, defaultName, defaultAmount, removeItem, itemId}) {
    const [editText, setEditText] = useState(defaultName || '');
    const [editAmount, setEditAmount] = useState(defaultAmount || '');
    const {state, dispatch} = useContext(BudgetContext);

    const inputNameRef = useRef();
    const inputAmountRef = useRef();
    useEffect(() => {
        inputNameRef.current.focus();
    }, [])
   


    const handleEditBudget = () => {
        if (editText.trim() === '' || editAmount === NaN || editAmount === undefined) return;
        const itemId = isEditing;
        dispatch({key: categoryKey, type: EDIT_BUDGET, payload: { id: itemId, text: editText, amount: Number(editAmount) } });
        setIsEditing(null);
    };

    function handleDelete(){ 
        dispatch({type: removeItem, payload: {id: itemId}})
    }

    return ( 
        <>
        <div className='budget-item__actions'>
            <button className="delete-btn" onClick={handleDelete}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="edit-btn" onClick={handleEditBudget}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
            <input
            className='edit-input-name'
            type="text"
            placeholder={categoryKey.slice(0,1).toUpperCase() + categoryKey.slice(1)}
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {if(e.code === 'Enter') inputAmountRef.current.focus()}}
            ref={inputNameRef}
            max-scale="1"
            />
            <input
            type='number' 
            className='edit-input-amount' 
            placeholder='Amount'
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)} 
            onKeyDown={(e) => {if(e.code === 'Enter') handleEditBudget()}}
            max-scale="1"
            ref={inputAmountRef}
            />
        </>
    );
}

export default EditBudgetItem;