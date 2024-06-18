// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { ADD_EXPENSE, REMOVE_EXPENSE } from '../reducers/BudgetReducer';
import FinancialCategory from './FinancialCategory';

const Expenses = () => {
  const [isEditing, setIsEditing] = useState(null);
  const { state } = useContext(BudgetContext);
  const { expenses } = state;

  return (
    <FinancialCategory title="Expense" addItem={ADD_EXPENSE} removeItem={REMOVE_EXPENSE} isEditing={isEditing} setIsEditing={setIsEditing} categoryKey='expenses' color='red' />
  );
};

export default Expenses;
