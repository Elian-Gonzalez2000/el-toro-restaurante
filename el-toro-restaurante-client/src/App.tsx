import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { getAllProduct } from "./actions/product.action";
import Cart from "./components/UI/Cart";

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAllProduct());
   }, []);
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/productos" element={<Products />} />
               <Route
                  path="/productos/hamburguer/:id"
                  element={<ProductDetails />}
               />
            </Routes>
         </Router>
         <Cart />
      </div>
   );
}

export default App;
