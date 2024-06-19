import React, { useContext, useRef, useState } from 'react';

import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import BudgetList from './BudgetList';
import AddCategory from './AddCategory';

/*
    category: Title
    addItem: Add item to budget list
    removeItem: Remove item from budget list
    categoryKey: income or expense or debt or savings
    isEditing: pass item ID to check if user is editing & what item
*/


function FinancialCategory({title, addItem, removeItem, isEditing, setIsEditing, categoryKey = '', color}) {
    const budgetListRef = useRef()
    return (
        <BudgetContainer>
            <HeaderContainer budgetListRef={budgetListRef} title={title} categoryKey={categoryKey} color={color} />
            <BudgetList budgetListRef={budgetListRef} removeItem={removeItem} categoryKey={categoryKey} isEditing={isEditing} setIsEditing={setIsEditing} />
            <AddCategory addItem={addItem} isEditing={isEditing} setIsEditing={setIsEditing} categoryKey={categoryKey} />
        </BudgetContainer>
      );
}

export default FinancialCategory;