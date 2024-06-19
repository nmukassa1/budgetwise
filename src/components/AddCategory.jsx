import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BudgetContext } from '../context/BudgetContext';

function AddCategory({ 
    addItem,
    setEditMode,
    setEditItemId,
    categoryKey = '',
    disableAdd
}) {
  const { state, dispatch } = useContext(BudgetContext);
//   const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (state[categoryKey].items.length > 0) {
      const lastItemAdded = state[categoryKey].items[state[categoryKey].items.length - 1].id;
      setEditItemId(lastItemAdded);
    }
  }, [state, categoryKey, setEditItemId]);

  const handleAdd = () => {
    dispatch({ type: addItem, payload: {} });
    setEditMode(true);
    // toggleButtonDisabled()
  };

 

  return (
    <button onClick={handleAdd} className='add-category-btn' disabled={disableAdd}>
      <FontAwesomeIcon icon={faPlus} /> Add Category
    </button>
  );
}

export default AddCategory;
