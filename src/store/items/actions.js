export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_DELETED = "ITEM_DELETED";

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const deleteItem = (uuid) => ({
  type: ITEM_DELETED,
  payload: {
    uuid
  }
});
