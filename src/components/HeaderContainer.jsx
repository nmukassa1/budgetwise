import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function HeaderContainer({ title, categoryKey, color }) {
    const {state} = useContext(BudgetContext);
    // Ensure that array is an array and calculate the total amount
    const totalAmount = Array.isArray(state[categoryKey].items) ? state[categoryKey].items.reduce((acc, item) => acc + (item.amount || 0), 0) : 0;

    return ( 
        <div className="header-container">
            <h3>
                {title}
                <span style={{ color: color }}>£{totalAmount}</span>
            </h3>
            <div className="toggle-height">
                <button className='open'><FontAwesomeIcon icon={faGreaterThan} /></button>
            </div>
        </div>
    );
}

export default HeaderContainer;
