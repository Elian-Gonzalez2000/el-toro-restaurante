import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Container from "../UI/Container/index";
import "./index.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Footer from "../Footer";

interface IProps {
   children?: JSX.Element | JSX.Element[];
   info: boolean | undefined;
   direction: boolean | undefined;
}

const Layout: React.FC<IProps> = ({ children, info, direction }) => {
   return (
      <>
         <Header info={info} />

         {children}
         <Footer direction={direction} />
      </>
   );
};

export default Layout;
