import React, { useContext, useState } from 'react';

import BudgetContainer from './BudgetContainer';
import HeaderContainer from './HeaderContainer';
import BudgetList from './BudgetList';
import AddCategory from './AddCategory';

/*
    category: Title
    action: What To Do
    categoryKey: e.g {income: items: [], lastAddedItem: null}
*/

function FinancialCategory({title, action, isEditing, setIsEditing, categoryKey = '', color}) {
    return (
        <BudgetContainer>
            <HeaderContainer title={title} categoryKey={categoryKey} color={color} />
            <BudgetList categoryKey={categoryKey} isEditing={isEditing} setIsEditing={setIsEditing} />
            <AddCategory action={action} setIsEditing={setIsEditing} categoryKey={categoryKey} />
        </BudgetContainer>
      );
}

export default FinancialCategory;