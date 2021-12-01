import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  itemDecrease,
  itemIncrease,
  removeItem,
} from "../../../../states/cart/cartActions";
import Styles from "./Product.module.css";

function ProductItem({ id, name, price, image }) {
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const isInCart = cartState.selectedItems.some((item) => item.id === id);

  const quantity = isInCart
    ? cartState.selectedItems.find((item) => item.id === id).quantity
    : 0;

  return (
    <Link to={`/products/${id}`}>
      <div className={Styles.productItemMain}>
        <img src={image} alt={name} className={Styles.productImage} />
        <div className={Styles.productTitle}>
          <div className={Styles.productName}>{name}</div>
          <div className={Styles.productPrice}>{price}$</div>
        </div>
        <div
          className={Styles.productCart}
          onClick={(event) => event.preventDefault()}
        >
          {isInCart ? (
            <div className={Styles.productCartEdit}>
              <button
                className={Styles.productCartDecrease}
                onClick={() =>
                  dispatch(quantity > 1 ? itemDecrease(id) : removeItem(id))
                }
              >
                -
              </button>
              <input
                type="text"
                size="2"
                className={Styles.productCardNumber}
                value={quantity}
                readOnly
              />
              <button
                className={Styles.productCartIncrease}
                onClick={() => dispatch(itemIncrease(id))}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className={Styles.productCartAdd}
              onClick={() => dispatch(addItem(id))}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
