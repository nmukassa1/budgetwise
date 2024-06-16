// src/components/Income.jsx
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { ADD_INCOME } from '../reducers/BudgetReducer';
import FinancialCategory from './FinancialCategory';

const Income = () => {
  const [isEditing, setIsEditing] = useState(null);

  const { state} = useContext(BudgetContext);
  const { income } = state;

  // const objKey = Object.keys(state).find((key) => key === 'income');

  return (
    <FinancialCategory title="Income" action={ADD_INCOME} isEditing={isEditing} setIsEditing={setIsEditing} categoryKey='income' color='green' />
  );
};

export default Income;
