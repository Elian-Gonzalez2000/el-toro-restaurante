import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Container from "../UI/Container/index";
import "./index.css";

interface IProps {
   children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<IProps> = ({ children }) => {
   return (
      <>
         <Header />

         {children}
      </>
   );
};

export default Layout;
