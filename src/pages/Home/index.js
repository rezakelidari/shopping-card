import React, { useEffect } from "react";
import Styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productFetch } from "../../states/products/productsActions";
import ProductItem from "./components/ProductItem";

function Home() {
  const props = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    productFetch(dispatch);
  }, []);

  return (
    <div className={Styles.homeMain}>
      {props.loading ? (
        <div className={Styles.homeLoading}>Loading...</div>
      ) : (
        <div className={Styles.homeProducts}>
          {props.data.length > 0 &&
            props.data.map((product) => (
              <ProductItem
                key={product.title}
                id={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
