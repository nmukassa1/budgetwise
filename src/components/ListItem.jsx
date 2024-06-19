import DefaultItemElement from './DefaultItemElement';
import EditItemElement from './EditItemElement'


function ListItem({item, categoryKey, editMode, setEditMode, removeItem, editItemId, setEditItemId}) {
    
    return ( 
            <li>
                {editMode && editItemId === item.id ? (
                    <EditItemElement item={item} categoryKey={categoryKey} removeItem={removeItem} editItemId={editItemId} editMode={editMode} setEditMode={setEditMode} defaultName={item.name} defaultAmount={item.amount} />
                ):(
                    <DefaultItemElement item={item} setEditMode={setEditMode} setEditItemId={setEditItemId} removeItem={removeItem} />
                )}
            </li>
)}

export default ListItem;