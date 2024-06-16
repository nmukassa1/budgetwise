import { createContext, useReducer } from 'react';
import { budgetReducer, initialState } from '../reducers/BudgetReducer';

const BudgetContext = createContext();

function BudgetProvider({children}) {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    return ( 
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>   
     );
}

export {BudgetProvider, BudgetContext};