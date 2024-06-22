import React, { useState } from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_INCOME, REMOVE_INCOME } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Income = () => {
  const { state } = useContext(BudgetContext);
  const { income } = state;

  const incomeProps = {
    title: "Income",
    addItem: ADD_INCOME,
    removeItem: REMOVE_INCOME,
    categoryKey: 'income',
    color: 'green'
  };

  return (
    <FinancialCategory {...incomeProps} />
  );
}

export default Income;
