import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkout, clear } from "../../states/cart/cartActions";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  const cartState = useSelector((state) => state.cartState);
  const items = cartState.selectedItems;
  const dispatch = useDispatch();

  return (
    <div className={Styles.cartMain}>
      <div className={Styles.cartList}>
        {items.map((item) => (
          <CartItem key={item.id} id={item.id} />
        ))}
        {items.length === 0 && (
          <div className={Styles.cartEmpty}>
            {!cartState.checkout ? "Cart is empty" : "Checked out successfully"}
            <Link to="/">
              <button className={Styles.cartBack}>Back to store</button>
            </Link>
          </div>
        )}
      </div>
      {items.length !== 0 && (
        <div className={Styles.cartDetailBox}>
          <div className={Styles.cartDetail}>
            <span className={Styles.detailTitle}>Total items:</span>
            {cartState.itemsCounter}
          </div>
          <div className={Styles.cartDetail}>
            <span className={Styles.detailTitle}>Total payments:</span>
            {cartState.total}$
          </div>
          <div className={Styles.detailButtons}>
            <button
              className={Styles.detailClear}
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
            <button
              className={Styles.detailCheckout}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
