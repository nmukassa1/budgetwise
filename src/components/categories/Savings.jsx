// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_SAVINGS, REMOVE_SAVINGS } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const { state } = useContext(BudgetContext);
  const { savings } = state;

  const savingsProps = {
    title: "Savings",
    addItem: ADD_SAVINGS,
    removeItem: REMOVE_SAVINGS,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    categoryKey: 'savings',
    color: 'green'
  };

  return (
    <FinancialCategory {...savingsProps} />
  );
};

export default Expenses;
