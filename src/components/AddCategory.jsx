import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import {BudgetContext} from '../context/BudgetContext';

function AddCategory({addItem, setEditMode, setEditItemId, categoryKey = ''}) {
    const {state, dispatch} = useContext(BudgetContext);
    const {lastAddedItem} = state[categoryKey];

    const [disabled, setDisabled] = useState(false)
    function disableButton(){
        setDisabled(!disabled)
    }

    function handleAdd() {
        dispatch({type: addItem, payload: {}})
        setEditMode(true)
    }

    
    useEffect(() => {
        const lastItemAdded = state[categoryKey].items[state[categoryKey].items.length - 1].id
        setEditItemId(lastItemAdded)
    }, [state])

    return ( 
        <button onClick={handleAdd} className='add-category-btn' disabled={disabled}>
            <FontAwesomeIcon icon={faPlus} />
             Add Category
        </button>
     );
}

export default AddCategory;