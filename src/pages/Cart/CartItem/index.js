import React, { useState, useEffect } from "react";
import Styles from "./CartItem.module.css";
import { getProductDetails } from "../../../api/productDetails";
import { shorter } from "../../../helper/functions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  itemDecrease,
  itemIncrease,
  removeItem,
} from "../../../states/cart/cartActions";
import { Link } from "react-router-dom";

function CartItem({ id }) {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    title: "",
    desc: "",
    image: "",
    category: "",
    price: 0,
  });

  const price = cartState.selectedItems.find((item) => item.id === id).price;
  const quantity = cartState.selectedItems.find(
    (item) => item.id === id
  ).quantity;

  useEffect(() => {
    getProductDetails(id).then((result) => {
      setIsLoading(false);
      if (result.type === "SUCCESS") {
        setData({
          title: shorter(result.data.title),
          desc: result.data.description,
          image: result.data.image,
          category: result.data.category,
          price: result.data.price,
        });
      } else if (result.data === "404") {
        navigate("/NotFound");
      }
    });
  }, []);

  return (
    <div className={Styles.cartItemMain}>
      {loading ? (
        <div className={Styles.cartItemLoading}>Loading...</div>
      ) : (
        <Link to={`/products/${id}`}>
          <div className={Styles.cartItemContainer}>
            <img
              src={data.image}
              alt="Product image"
              className={Styles.cartItemProductImage}
            />
            <div className={Styles.cartItemProductDetail}>
              <div className={Styles.cartItemProductName}>
                {shorter(data.title)}
              </div>
              <div className={Styles.cartItemProductPrice}>{data.price}$</div>
            </div>
            <div
              className={Styles.cartItemEdit}
              onClick={(event) => event.preventDefault()}
            >
              <button
                className={Styles.cartItemDecrease}
                onClick={() =>
                  dispatch(
                    quantity > 1
                      ? itemDecrease(id, price)
                      : removeItem(id, price)
                  )
                }
              >
                -
              </button>
              <input
                type="text"
                size="2"
                className={Styles.cartItemNumber}
                value={quantity}
                readOnly
              />
              <button
                className={Styles.cartItemIncrease}
                onClick={() => dispatch(itemIncrease(id, price))}
              >
                +
              </button>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CartItem;
