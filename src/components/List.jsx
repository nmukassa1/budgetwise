import { BudgetContext } from "../context/BudgetContext";
import LisiItem from "./ListItem";
import { useContext } from "react";

function List({categoryKey, editMode, setEditMode, editItemId,
  setEditItemId , budgetListRef, removeItem}) {
  const {state} = useContext(BudgetContext);


    return ( 
        <ul className="budget-list" ref={budgetListRef}>
        {state[categoryKey].items.map((item) => (
         <LisiItem key={item.id} item={item} categoryKey={categoryKey} editMode={editMode} setEditMode={setEditMode} editItemId={editItemId}
         setEditItemId={setEditItemId} removeItem={removeItem} />
        ))}
      </ul>
    );
}

export default List;