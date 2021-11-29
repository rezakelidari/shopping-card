import React, { useEffect, useState } from "react";
import Styles from "./Product.module.css";
import { useParams } from "react-router";
import { getProductDetails } from "../../api/productDetails";
import { shorter } from "../../helper/functions";

function Product() {
  const params = useParams();
  const productId = params.id;
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    title: "",
    desc: "",
    image: "",
    category: "",
    price: 0,
  });

  useEffect(() => {
    getProductDetails(productId).then((result) => {
      if (result.type === "SUCCESS") {
        setIsLoading(false);
        setData({
          title: shorter(result.data.title),
          desc: result.data.description,
          image: result.data.image,
          category: result.data.category,
          price: result.data.price,
        });
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
