import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Product.module.css";

function ProductItem({ id, name, price, image }) {
  return (
    <Link to={`/${id}`}>
      <div className={Styles.productItemMain}>
        <img src={image} alt={name} className={Styles.productImage} />
        <div className={Styles.productTitle}>
          <div className={Styles.productName}>{name}</div>
          <div className={Styles.productPrice}>{price}$</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
