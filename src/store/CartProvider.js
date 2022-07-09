import CartContext from "./CartContext";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal = state.total.concat(action.total);

    return { items: updatedItems, total: updatedTotal };
  }

  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispacthCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const AddItemHandler = (item) => {
    dispacthCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispacthCartAction({ type: "REMOVE", id: id });
  };

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
