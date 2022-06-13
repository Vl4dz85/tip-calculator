import { ITEM_ADDED, ITEM_DELETED, ITEM_PRICE_UPDATED } from "./actions";

let id = 3;

export const initialItems = [
  { uuid: 1, name: "Tofu Roast", price: 14, quantity: 1 },
  { uuid: 2, name: "Vegan Ham", price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    console.log(action.type);
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }
  if (action.type === ITEM_DELETED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }
  if (action.type === ITEM_PRICE_UPDATED) {
    console.log(action);
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, price: action.payload.price };
      }
      return item;
    });
  }
  return state;
};

export default reducer;
