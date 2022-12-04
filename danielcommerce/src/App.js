// import { store } from "./store";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import ProductPage from "./pages/products";
// import SignUp from "./pages/signupPage";
import CartPage from "./pages/cartPage";
import LoginPage from "./pages/loginPage";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import SingleProductPage from "./pages/singleProductPage";
import AddPage from "./pages/addPage";
import QuantityPage from "./pages/quantityPage";
import DeletePage from "./pages/deletePage";

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
const ConstContext = React.createContext();
const UserContext = React.createContext();
const DataContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <ConstContext.Provider value={{}}>
        <UserContext.Provider value={{}}>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="product/:id" element={<SingleProductPage />} />
            <Route path="addproduct/:id" element={<AddPage />} />
            <Route
              path="/cart/product/:id/:quantity"
              element={<QuantityPage />}
            />
            <Route path="/delete/:id/" element={<DeletePage />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </ConstContext.Provider>
    </BrowserRouter>
  );
}

export default App;
