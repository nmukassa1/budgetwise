import { BudgetContext } from "../context/BudgetContext";
import BudgetLisiItem from "./BudgetListItem";
import { useContext } from "react";

function BudgetList({categoryKey, isEditing, setIsEditing , budgetListRef}) {
  const {state} = useContext(BudgetContext);
    return ( 
        <ul className="budget-list" ref={budgetListRef}>
        {state[categoryKey].items.map((item) => (
         <BudgetLisiItem key={item.id} item={item} categoryKey={categoryKey} isEditing={isEditing} setIsEditing={setIsEditing} />
        ))}
      </ul>
    );
}

export default BudgetList;