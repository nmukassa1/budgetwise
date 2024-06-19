import React, { useContext } from 'react';
import { BudgetContext } from "../context/BudgetContext";
import ListItem from "./ListItem";

function List({
  categoryKey,
  editMode,
  setEditMode,
  editItemId,
  setEditItemId,
  budgetListRef,
  removeItem
}) {
  const { state } = useContext(BudgetContext);

  const sharedProps = {
    categoryKey,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    removeItem
  };

  return (
    <ul className="budget-list" ref={budgetListRef}>
      {state[categoryKey].items.map((item) => (
        <ListItem key={item.id} item={item} {...sharedProps} />
      ))}
    </ul>
  );
}

export default List;
