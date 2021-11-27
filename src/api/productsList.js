import axios from "axios";
import { productActions } from "../states/products/productsActions";

const baseUri = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  let result;
  await axios
    .get(baseUri)
    .then((response) => {
      result = { type: productActions.Success, data: response.data };
    })
    .catch((error) => {
      result = { type: productActions.Failed, data: error.message };
    });
  return result;
};
