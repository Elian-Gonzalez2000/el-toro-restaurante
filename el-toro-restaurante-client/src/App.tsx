import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
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
      </div>
   );
}

export default App;
