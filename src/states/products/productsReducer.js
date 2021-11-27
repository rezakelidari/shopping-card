import { productActions } from "./productsActions";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.Request:
      return { ...state, loading: true };

    case productActions.Success: {
      return { loading: false, data: action.payload, error: "" };
    }

    case productActions.Failed: {
      return { loading: false, data: [], error: action.payload };
    }

    default:
      return initialState;
  }
}

export default productsReducer;
