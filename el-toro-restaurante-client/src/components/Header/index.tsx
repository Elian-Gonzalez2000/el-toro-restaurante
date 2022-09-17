import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Button from "../UI/Button";
import logoElToro from "../../assets/el-toro-logo.jpg";
import "./index.css";

interface Props {
   info: boolean | undefined;
}

const Header = ({ info }: Props) => {
   return (
      <>
         <nav className="nav-bar">
            <ul>
               <li>
                  <Link to="">{<FaFacebookF />}</Link>
               </li>
               <li>
                  <Link to="">{<FaInstagram />}</Link>
               </li>
            </ul>
         </nav>
         {info ? (
            <div className="restaurant-info">
               <div className="restaurant-logo">
                  <img src={logoElToro} alt="logo" />
               </div>
               <Button
                  url={"/productos"}
                  className={undefined}
                  onClick={undefined}
               >
                  Nuestros productos
               </Button>
               <h3>El Buen Sabor de la Comida</h3>
            </div>
         ) : null}
      </>
   );
};

export default Header;
