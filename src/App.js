import React from "react";
import Styles from "./styles/App.module.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import store from "./states/store";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className={Styles.appMain}>
        <Navbar />
        <Provider store={store}>
          <Routes>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
