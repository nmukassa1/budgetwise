// src/components/Income.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../../context/BudgetContext';
import { ADD_INCOME, REMOVE_INCOME } from '../../reducers/BudgetReducer';
import FinancialCategory from '../FinancialCategory';

const Income = () => {
  const [editMode, setEditMode] = useState(null);
  const [editItemId, setEditItemId] = useState(null);

  const { state} = useContext(BudgetContext);
  const { income } = state;

  const incomeProps = {
    title: "Income",
    addItem: ADD_INCOME,
    removeItem: REMOVE_INCOME,
    editMode,
    setEditMode,
    editItemId,
    setEditItemId,
    categoryKey: 'income',
    color: 'green'
  };


  return (
    <FinancialCategory {...incomeProps} />
  )
};

export default Income;
