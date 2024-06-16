// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { ADD_SAVINGS } from '../reducers/BudgetReducer';
import FinancialCategory from './FinancialCategory';

const Expenses = () => {
  const [isEditing, setIsEditing] = useState(null);
  const { state } = useContext(BudgetContext);
  const { savings } = state;

  return (
    <FinancialCategory title="Savings" action={ADD_SAVINGS} isEditing={isEditing} setIsEditing={setIsEditing} categoryKey='savings' color='green' />
  );
};

export default Expenses;
