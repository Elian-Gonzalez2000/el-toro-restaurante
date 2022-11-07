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
                  <a
                     href="https://z-p42.www.instagram.com/tostadaseltoro/?hl=es-la"
                     target={"_blank"}
                  >
                     {<FaInstagram />}
                  </a>
               </li>
            </ul>
         </nav>
         {info ? (
            <div className="restaurant-info">
               <div className="restaurant-logo">
                  <Link to={"/"}>
                     <img src={logoElToro} alt="logo" />
                  </Link>
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
