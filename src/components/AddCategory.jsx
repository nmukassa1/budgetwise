import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import {BudgetContext} from '../context/BudgetContext';

function AddCategory({addItem, isEditing, setIsEditing, categoryKey = ''}) {
    const {state, dispatch} = useContext(BudgetContext);
    const {lastAddedItem} = state[categoryKey];

    const [disabled, setDisabled] = useState(false)
    function disableButton(){
        setDisabled(!disabled)
    }

    function handleAdd() {
        dispatch({type: addItem, payload: {}})
    }

    useEffect(() => {
        if (lastAddedItem !== null) {
            setIsEditing(state[categoryKey].lastAddedItem);
            disableButton()
        }
        else{
           disableButton()
        }
    }, [lastAddedItem])

    return ( 
        <button onClick={handleAdd} className='add-category-btn' disabled={disabled}>
            <FontAwesomeIcon icon={faPlus} />
             Add Category
        </button>
     );
}

export default AddCategory;