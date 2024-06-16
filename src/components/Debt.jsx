// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { ADD_DEBT } from '../reducers/BudgetReducer';
import FinancialCategory from './FinancialCategory';

const Expenses = () => {
  const [isEditing, setIsEditing] = useState(null);
  const { state } = useContext(BudgetContext);
  const { debt } = state;

  return (
    <FinancialCategory title="Debt" action={ADD_DEBT} isEditing={isEditing} setIsEditing={setIsEditing} categoryKey='debt' color='red' />
  );
};

export default Expenses;