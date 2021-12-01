import { cartActions } from "./cartActions";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

function sumItems(items) {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter: itemsCounter, total: total };
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartActions.addItem:
      const addItemSI = [...state.selectedItems];
      !addItemSI.find((item) => item.id === action.payload.id) &&
        addItemSI.push({
          ...action.payload,
          quantity: 1,
        });

      return { ...state, selectedItems: addItemSI, ...sumItems(addItemSI) };

    case cartActions.removeItem:
      const removeItemSI = [...state.selectedItems].filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: removeItemSI,
        ...sumItems(removeItemSI),
      };

    case cartActions.itemIncrease:
      const itemIndexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemIncreaseSI = [...state.selectedItems];
      itemIncreaseSI[itemIndexI].quantity++;

      return {
        ...state,
        selectedItems: itemIncreaseSI,
        ...sumItems(itemIncreaseSI),
      };

    case cartActions.itemDecrease:
      const itemIndexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemDecreaseSI = [...state.selectedItems];
      itemDecreaseSI[itemIndexD].quantity--;

      return {
        ...state,
        selectedItems: itemDecreaseSI,
        ...sumItems(itemDecreaseSI),
      };

    case cartActions.checkout:
      return {
        ...initialState,
        checkout: true,
      };

    case cartActions.clear:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
