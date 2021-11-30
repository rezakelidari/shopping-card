import axios from "axios";

const baseUri = "https://fakestoreapi.com/products/";

export const getProductDetails = async (productId) => {
  let result;
  await axios
    .get(baseUri + productId)
    .then((response) => {
      response.data
        ? (result = { type: "SUCCESS", data: response.data })
        : (result = { type: "FAILED", data: "404" });
    })
    .catch((error) => {
      result = { type: "FAILED", data: error.message };
    });
  return result;
};
