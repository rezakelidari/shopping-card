const cartActions = {
  addItem: "ADD_ITEM",
  removeItem: "REMOVE_ITEM",
  itemIncrease: "ITEM_INCREASE",
  itemDecrease: "ITEM_DECREASE",
  checkout: "CHECKOUT",
  clear: "CLEAR",
};

const addItem = (product) => {
  return {
    type: cartActions.addItem,
    payload: product,
  };
};

const removeItem = (product) => {
  return {
    type: cartActions.removeItem,
    payload: product,
  };
};

const itemIncrease = (product) => {
  return {
    type: cartActions.itemIncrease,
    payload: product,
  };
};

const itemDecrease = (product) => {
  return {
    type: cartActions.itemDecrease,
    payload: product,
  };
};

const checkout = () => {
  return {
    type: cartActions.checkout,
  };
};

const clear = () => {
  return {
    type: cartActions.clear,
  };
};

export {
  cartActions,
  addItem,
  removeItem,
  itemIncrease,
  itemDecrease,
  checkout,
  clear,
};
