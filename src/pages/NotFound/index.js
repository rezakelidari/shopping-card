import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={Styles.notFoundMain}>
      <h1>Not Found - 404</h1>
      <Link to="/">
        <button className={Styles.notFoundBack}>Back to store</button>
      </Link>
    </div>
  );
}

export default NotFound;
