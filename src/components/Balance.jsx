import React, { useContext, useEffect } from 'react';
import {BudgetContext} from '../context/BudgetContext';

const Balance = () => {
  const { state } = useContext(BudgetContext);
  const { income, expenses, debt, savings } = state;

  const totalIncome = income.items.filter((item) => item.amount !== undefined).reduce((acc, item) => acc + item.amount, 0)
  const totalExpenses = expenses.items.filter((item) => item.amount !== undefined).reduce((acc, item) => acc + item.amount, 0)
  const totalDebt = debt.items.filter((item) => item.amount !== undefined).reduce((acc, item) => acc + item.amount, 0)
  const totalSavings = savings.items.filter((item) => item.amount !== undefined).reduce((acc, item) => acc + item.amount, 0)

  const balance = (totalIncome - totalExpenses - totalDebt - totalSavings).toLocaleString('en-UK', {style: 'currency', currency: 'GBP'});

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state));
  }, [state])

  return (
    <div className='balance'>
      <h3>Balance <span>{balance}</span></h3>
    </div>
  );
};

export default Balance;
