import React, { useEffect, useState } from "react";
import Styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router";
import { getProductDetails } from "../../api/productDetails";
import { shorter } from "../../helper/functions";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  itemDecrease,
  itemIncrease,
  removeItem,
} from "../../states/cart/cartActions";

function Product() {
  const navigate = useNavigate();

  const params = useParams();
  const id = +params.id;
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

  const isInCart = cartState.selectedItems.some((item) => item.id === id);
  const quantity = isInCart
    ? cartState.selectedItems.find((item) => item.id === id).quantity
    : 0;

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
    <div className={Styles.productMain}>
      {loading ? (
        <div className={Styles.productLoading}>Loading...</div>
      ) : (
        <div className={Styles.productWrapper}>
          <img
            src={data.image}
            className={Styles.productImage}
            alt={data.title}
          />
          <div className={Styles.productDetails}>
            <h1 className={Styles.productTitle}>{data.title}</h1>
            <div className={Styles.productPrice}>Price: {data.price}$</div>
            <div className={Styles.productCategory}>
              Category: {data.category}
            </div>
            <p className={Styles.productDesc}>{data.desc}</p>
            <br />
            {isInCart ? (
              <div className={Styles.productEdit}>
                <button
                  className={Styles.productDecrease}
                  onClick={() =>
                    dispatch(
                      quantity > 1
                        ? itemDecrease(id, data.price)
                        : removeItem(id, data.price)
                    )
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  size="2"
                  className={Styles.productNumber}
                  value={quantity}
                  readOnly
                />
                <button
                  className={Styles.productIncrease}
                  onClick={() => dispatch(itemIncrease(id, data.price))}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className={Styles.productAdd}
                onClick={() => dispatch(addItem(id, data.price))}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
