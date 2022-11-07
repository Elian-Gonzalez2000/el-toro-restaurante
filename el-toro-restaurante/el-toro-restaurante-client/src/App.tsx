import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { getAllProduct } from "./actions/product.action";
import BuyProducts from "./pages/BuyProducts";

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
               <Route path="/productos/comprar" element={<BuyProducts />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
