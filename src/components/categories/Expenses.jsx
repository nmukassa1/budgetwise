// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_EXPENSE, REMOVE_EXPENSE } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const { state } = useContext(BudgetContext);
  const { expenses } = state;

  const expensesProps = {
    title: "Expenses",
    addItem: ADD_EXPENSE,
    removeItem: REMOVE_EXPENSE,
    categoryKey: 'expenses',
    color: 'red'
  };

  return (
    <FinancialCategory {...expensesProps}  />
  );
};

export default Expenses;
