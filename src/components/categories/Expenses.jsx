// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_EXPENSE, REMOVE_EXPENSE } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const { state } = useContext(BudgetContext);
  const { expenses } = state;

  const expensesProps = {
    title: "Expenses",
    addItem: ADD_EXPENSE,
    removeItem: REMOVE_EXPENSE,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    categoryKey: 'expenses',
    color: 'red'
  };

  return (
    <FinancialCategory {...expensesProps}  />
  );
};

export default Expenses;
