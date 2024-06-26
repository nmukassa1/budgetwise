import React, { useEffect, useRef, useState } from 'react';
import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import List from './List';
import AddCategory from './AddCategory';

function FinancialCategory({
  title,
  addItem,
  removeItem,
  editMode,
  setEditMode,
  editItemId,
  setEditItemId,
  categoryKey = '',
  color
}) {
  const budgetListRef = useRef();
  const [disableAdd, setDisableAdd] = useState(false);

  const sharedProps = {
    budgetListRef,
    categoryKey,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    addItem,
    removeItem,
    disableAdd,
    setDisableAdd
  };

  useEffect(() => {
    editMode ? setDisableAdd(true) : setDisableAdd(false)
  }, [editMode])

  return (
    <BudgetContainer>
      <HeaderContainer {...sharedProps} title={title} color={color} />
      <List {...sharedProps} />
      <AddCategory {...sharedProps} />
    </BudgetContainer>
  );
}

export default FinancialCategory;
