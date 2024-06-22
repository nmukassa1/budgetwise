import React, { useEffect, useRef, useState } from 'react';
import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import List from './List';
import AddCategory from './AddCategory';

function FinancialCategory({
  title,
  addItem,
  removeItem,
  categoryKey = '',
  color
}) {
  const budgetListRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [disableAdd, setDisableAdd] = useState(false);

  useEffect(() => {
    setDisableAdd(editMode);
  }, [editMode]);

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

  return (
    <BudgetContainer>
      <HeaderContainer {...sharedProps} title={title} color={color} />
      <List {...sharedProps} />
      <AddCategory {...sharedProps} />
    </BudgetContainer>
  );
}

export default FinancialCategory;
