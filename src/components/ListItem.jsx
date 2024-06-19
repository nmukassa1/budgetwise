import React from 'react';
import DefaultItemElement from './DefaultItemElement';
import EditItemElement from './EditItemElement';

function ListItem({
  item,
  categoryKey,
  editMode,
  setEditMode,
  removeItem,
  editItemId,
  setEditItemId, 
}) {
  const sharedProps = {
    item,
    categoryKey,
    editMode,
    setEditMode,
    removeItem,
    editItemId,
    setEditItemId,
  };

  return (
    <li>
      {editMode && editItemId === item.id ? (
        <EditItemElement
          {...sharedProps}
          defaultName={item.name}
          defaultAmount={item.amount}
        />
      ) : (
        <DefaultItemElement {...sharedProps} />
      )}
    </li>
  );
}

export default ListItem;
