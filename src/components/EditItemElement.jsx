import React, { useState, useRef, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { BudgetContext } from '../context/BudgetContext';
import { EDIT_BUDGET } from '../reducers/BudgetReducer';

function EditItemElement({
  categoryKey,
  setEditMode,
  editItemId,
  defaultName = '',
  defaultAmount = '',
  removeItem,
  item,
}) {
  const [editText, setEditText] = useState(defaultName);
  const [editAmount, setEditAmount] = useState(defaultAmount);
  const { dispatch } = useContext(BudgetContext);

  const inputNameRef = useRef();
  const inputAmountRef = useRef();

  useEffect(() => {
    inputNameRef.current.focus();
  }, []);

  const saveEditedItem = () => {
    if (editText.trim() === '' || isNaN(editAmount) || editAmount === '') return;
    dispatch({
      key: categoryKey,
      type: EDIT_BUDGET,
      payload: { id: item.id, text: editText, amount: Number(editAmount) }
    });
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch({ type: removeItem, payload: { id: item.id } });
    setEditMode(false);
  };

  return (
    <>
      <div className='budget-item__actions'>
        <button className="delete-btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button className="edit-btn" onClick={saveEditedItem}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
      <input
        className='edit-input-name'
        type="text"
        placeholder={categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') inputAmountRef.current.focus();
        }}
        ref={inputNameRef}
      />
      <input
        type='number'
        className='edit-input-amount'
        placeholder='Amount'
        value={editAmount}
        onChange={(e) => setEditAmount(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') saveEditedItem();
        }}
        ref={inputAmountRef}
      />
    </>
  );
}

export default EditItemElement;
