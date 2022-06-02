import CartContext from "./Cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};

function CartProvider(props) {
  const AddItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const [cartState, dispacthCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: AddItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
