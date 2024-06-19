import './styles/css/styles.css'
import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Income from './components/categories/Income';
import Expenses from './components/categories/Expenses';
import Debt from './components/categories/Debt';
import Savings from './components/categories/Savings';
import Balance from './components/Balance';
import Banner from './components/Banner';

const App = () => {
  return (
    <BudgetProvider>
      <div>
        <Banner />
        <div id="wrapper">
          <Income />
          <Expenses />
          <Debt />
          <Savings />
          <Balance />  
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
