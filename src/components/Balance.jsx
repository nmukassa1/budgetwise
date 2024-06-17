import React, { useContext, useEffect } from 'react';
import {BudgetContext} from '../context/BudgetContext';

const Balance = () => {
  const { state } = useContext(BudgetContext);
  const { income, expenses, debt, savings } = state;

  const totalIncome = income.items.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.items.reduce((acc, item) => acc + item.amount, 0);
  const totalDebt = debt.items.reduce((acc, item) => acc + item.amount, 0);
  const totalSavings = savings.items.reduce((acc, item) => acc + item.amount, 0);

  const balance = totalIncome - totalExpenses - totalDebt - totalSavings;

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state));
    // console.log(balance);
  }, [state])

  return (
    <div className='balance'>
      <h3>Balance <span>£{balance}</span></h3>
    </div>
  );
};

export default Balance;
