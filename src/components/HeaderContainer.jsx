import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { BudgetContext } from "../context/BudgetContext";

function HeaderContainer({ title, categoryKey, color, budgetListRef }) {
    const {state} = useContext(BudgetContext);
    const totalAmount = state[categoryKey].items.reduce((acc, item) => acc + (item.amount || 0), 0);

    const arrowRef = useRef();

    function toggleList(){
        budgetListRef.current.classList.toggle('show-list');
        arrowRef.current.classList.toggle('turn');
        // console.log(budgetListRef.current.classList);
    }
    return ( 
        <div className="header-container">
            <h3>
                {title}
                <span style={{ color: color }}>{totalAmount.toLocaleString('en-UK', {style: 'currency', currency: 'GBP'})}</span>
            </h3>
            <button ref={arrowRef} onClick={toggleList} className='toggle-list'><FontAwesomeIcon icon={faGreaterThan} /></button>
        </div>
    );
}

export default HeaderContainer;
