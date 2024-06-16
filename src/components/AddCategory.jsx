import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import {BudgetContext} from '../context/BudgetContext';

function AddCategory({action, setIsEditing, categoryKey = ''}) {
    const {state, dispatch} = useContext(BudgetContext);
    const {lastAddedItem} = state[categoryKey];

    function handleAdd() {
        dispatch({type: action, payload: {name: 'New Item', amount: 0}})
    }

    useEffect(() => {
        if (lastAddedItem !== null) {
            setIsEditing(state[categoryKey].lastAddedItem);
            // console.log(state[categoryKey])
        }
    }, [lastAddedItem])

    return ( 
        <button onClick={handleAdd} className='add-category-btn'><FontAwesomeIcon icon={faPlus} /> Add Category </button>
     );
}

export default AddCategory;