import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { signout } from "../../actions";

const Header = () => {
   const auth = useSelector((state: any): any => state.auth);
   const dispatch = useDispatch();

   const handleClick = (e: any) => {
      e.preventDefault;
      dispatch(signout());
   };
   return (
      <nav className="nav-bar">
         <ul>
            <li>
               <Link to="/">Inicio</Link>
            </li>
            {auth.authenticate ? (
               <>
                  <li>
                     <Link to="/usuarios">Usuarios</Link>
                  </li>
                  <li>
                     <Link to="/productos">Productos</Link>
                  </li>
                  <li>
                     <Link to="/compras">Compras</Link>
                  </li>
                  <li>
                     <Link to="/login" onClick={handleClick}>
                        Cerrar sesion
                     </Link>
                  </li>
               </>
            ) : (
               <li>
                  <Link to="/login">Iniciar sesion</Link>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default Header;
