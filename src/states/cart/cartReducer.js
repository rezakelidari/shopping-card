import { cartActions } from "./cartActions";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartActions.addItem:
      const addItemSI = [...state.selectedItems];
      !addItemSI.find((item) => item.id === action.payload) &&
        addItemSI.push({
          id: action.payload,
          quantity: 1,
        });

      return { ...state, selectedItems: addItemSI };

    case cartActions.removeItem:
      const removeItemSI = [...state.selectedItems].filter(
        (item) => item.id !== action.payload
      );
      return { ...state, selectedItems: removeItemSI };

    case cartActions.itemIncrease:
      const itemIndexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );

      const itemIncreaseSI = [...state.selectedItems];
      itemIncreaseSI[itemIndexI].quantity++;

      return {
        ...state,
        selectedItems: itemIncreaseSI,
      };

    case cartActions.itemDecrease:
      const itemIndexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );

      const itemDecreaseSI = [...state.selectedItems];
      itemDecreaseSI[itemIndexD].quantity--;

      return {
        ...state,
        selectedItems: itemDecreaseSI,
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
