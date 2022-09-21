import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn } from "./actions";
import "./App.css";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CreateUsers from "./pages/CreateUsers";
import EditUsers from "./pages/EditUsers";
import CreateProducts from "./pages/CreateProducts";
import EditProduct from "./pages/EditProduct";

function App() {
   const dispatch = useDispatch();
   const auth = useSelector((state: any) => state.auth);

   //console.log(users);
   useEffect(() => {
      if (!auth.authenticate) {
         dispatch(isUserLoggedIn());
      }
      if (auth.authenticate) {
         dispatch(getInitialData());
      }
   }, [auth.authenticate]);
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
               <Route path="/usuarios" element={<Users />} />
               <Route
                  path="/usuarios/crear-usuario"
                  element={<CreateUsers />}
               />
               <Route
                  path="/usuarios/editar/:useremail"
                  element={<EditUsers />}
               />
               <Route path="/productos" element={<Products />} />
               <Route
                  path="/productos/:category/:id"
                  element={<ProductDetail />}
               />
               <Route
                  path="/productos/:category/:id/edit"
                  element={<EditProduct />}
               />
               <Route path="/productos/create" element={<CreateProducts />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
