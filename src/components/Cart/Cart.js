import classes from "./Cart.module.css";
import React from "react";
import Modal from "../Ui/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "suchi", amount: "2", price: "13" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total amount</span>
        <span>15</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}></button>
      </div>
    </Modal>
  );
}

export default Cart;