import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
   return (
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
   );
};

export default Header;
