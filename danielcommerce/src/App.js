import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import ProductPage from "./pages/products";
// import SignUp from "./pages/signupPage";
import CartPage from "./pages/cartPage";
import LoginPage from "./pages/loginPage";
import NavBar from "./components/navBar";
import SingleProductPage from "./pages/singleProductPage";
// const Button = styled.button`
//   background: green;
//   color: white;
// `;
// const Container = styled.div`
//   background: red;
//   color: white;
//   .hero{
//     font-size: 8rem;
// `;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
    </Provider>
  );
}

export default App;
