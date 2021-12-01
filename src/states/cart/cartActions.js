const cartActions = {
  addItem: "ADD_ITEM",
  removeItem: "REMOVE_ITEM",
  itemIncrease: "ITEM_INCREASE",
  itemDecrease: "ITEM_DECREASE",
  checkout: "CHECKOUT",
  clear: "CLEAR",
};

const addItem = (product, price) => {
  return {
    type: cartActions.addItem,
    payload: { id: product, price: price },
  };
};

const removeItem = (product, price) => {
  return {
    type: cartActions.removeItem,
    payload: { id: product, price: price },
  };
};

const itemIncrease = (product, price) => {
  return {
    type: cartActions.itemIncrease,
    payload: { id: product, price: price },
  };
};

const itemDecrease = (product, price) => {
  return {
    type: cartActions.itemDecrease,
    payload: { id: product, price: price },
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
