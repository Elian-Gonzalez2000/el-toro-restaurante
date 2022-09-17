import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
   const token = window.localStorage.getItem("user");

   return <>{token ? <Component /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
