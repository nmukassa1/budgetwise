import React, { useContext, useRef, useState } from 'react';

import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import List from './List';
import AddCategory from './AddCategory';

/*
    category: Title
    addItem: Add item to budget list
    removeItem: Remove item from budget list
    categoryKey: income or expense or debt or savings
    isEditing: pass item ID to check if user is editing & what item
*/


function FinancialCategory({title, addItem, removeItem, editMode, setEditMode, editItemId,
    setEditItemId, categoryKey = '', color}) {
    const budgetListRef = useRef()
    return (
        <BudgetContainer>
            <HeaderContainer budgetListRef={budgetListRef} title={title} categoryKey={categoryKey} color={color} />
            <List budgetListRef={budgetListRef} removeItem={removeItem} categoryKey={categoryKey} editMode={editMode} setEditMode={setEditMode} editItemId={editItemId} setEditItemId={setEditItemId} />
            <AddCategory addItem={addItem} setEditMode={setEditMode} editItemId={editItemId} setEditItemId={setEditItemId} categoryKey={categoryKey} />
        </BudgetContainer>
      );
}

export default FinancialCategory;