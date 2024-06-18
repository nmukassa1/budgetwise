const ADD_INCOME = 'ADD_INCOME';
const REMOVE_INCOME = 'REMOVE_INCOME';
const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const ADD_DEBT = 'ADD_DEBT';
const REMOVE_DEBT = 'REMOVE_DEBT';
const ADD_SAVINGS = 'ADD_SAVINGS';
const REMOVE_SAVINGS = 'REMOVE_SAVINGS';
const EDIT_BUDGET = 'EDIT_BUDGET';

// const initialState = {
//     income: {items: [{ id: 1, name: 'Work', amount: 2000 }], lastAddedItem: null},
//     expenses: {items: [{ id: 1, name: 'Rent', amount: 1000 }], lastAddedItem: null},
//     debt: {items: [{ id: 1, name: 'Student Loan', amount: 200 }], lastAddedItem: null},
//     savings: {items: [{ id: 1, name: 'Vacation', amount: 100 }], lastAddedItem: null}
// }
const budgetStructure = {
    income: {items: [{ id: 1, name: 'Work', amount: 2000 }], lastAddedItem: null},
    expenses: {items: [{ id: 1, name: 'Rent', amount: 1000 }], lastAddedItem: null},
    debt: {items: [{ id: 1, name: 'Student Loan', amount: 200 }], lastAddedItem: null},
    savings: {items: [{ id: 1, name: 'Vacation', amount: 100 }], lastAddedItem: null}
}


const initialState = localStorage.getItem('budget') !== null ? JSON.parse(localStorage.getItem('budget')) : budgetStructure


 
function add(key, state, action){
    const newItem = {id: Date.now(), name: action.payload.name, amount: action.payload.amount}
    return {
        ...state,
        [key]: {
            items: [...state[key].items, newItem],
            lastAddedItem: newItem.id
        }
    }
};

function remove(key, state, action){
    return {
       ...state, 
         [key]: {
            items: state[key].items.filter(item => item.id !== action.payload.id),
            lastAddedItem: null
         }
    };
}
function saveEdit(key, state, action){
    return {
        // ...state,
        // [key]: state[key].map(item =>
        //     item.id === action.payload.id ? { ...item, id: Date.now(), amount: action.payload.text } : item)
        ...state,
        [key]: {
            ...state[key],
            items: state[key].items.map(item => 
                item.id === action.payload.id ? { ...item, name: action.payload.text, amount: action.payload.amount } : item
            ),
            lastAddedItem: null
        }
    }
}

const budgetReducer = (state, action) => {
    switch (action.type) {
        // Add cases for adding/removing income, expenses, debt, and savings
        case ADD_INCOME:
            return add('income', state, action)
        case REMOVE_INCOME:
            return remove('income', state, action)
        case ADD_EXPENSE:
            return add('expenses', state, action)
        case REMOVE_EXPENSE:
            return remove('expenses', state, action)
        case ADD_DEBT:
            return add('debt', state, action)
        case REMOVE_DEBT:
            return remove('debt', state, action);
        case ADD_SAVINGS:
            return add('savings', state, action)
        case REMOVE_SAVINGS:
            return remove('savings', state, action)
        case EDIT_BUDGET:
            // console.log(action)
            return saveEdit(action.key, state, action);
        default:
        return state;
    }
};

export { budgetReducer, initialState, ADD_INCOME, REMOVE_INCOME, ADD_EXPENSE, REMOVE_EXPENSE, ADD_DEBT, REMOVE_DEBT, ADD_SAVINGS, REMOVE_SAVINGS, EDIT_BUDGET}