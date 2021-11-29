import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

function Title() {
  return (
    <Link to="/">
      <div className={Styles.titleMain}>MyShop</div>
    </Link>
  );
}

export default Title;
