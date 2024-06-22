// src/components/Expenses.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_DEBT, REMOVE_DEBT } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Expenses = () => {
  const { state } = useContext(BudgetContext);
  const { debt } = state;

  const debtProps = {
    title: "Debt",
    addItem: ADD_DEBT,
    removeItem: REMOVE_DEBT,
    categoryKey: 'debt',
    color: 'red'
  };

  return (
    <FinancialCategory {...debtProps} />
  );
};

export default Expenses;
