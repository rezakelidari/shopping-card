import React from "react";
import Styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import Title from "../Title";
import cartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const cartState = useSelector((state) => state.cartState);
  const itemsCounter = cartState.itemsCounter;

  return (
    <nav>
      <Title />
      <Link to="/cart">
        <button className={Styles.navCart}>
          <img src={cartIcon} alt="Cart" className={Styles.navCartIcon} />
          <span className={Styles.navCartNumber}>{itemsCounter}</span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
