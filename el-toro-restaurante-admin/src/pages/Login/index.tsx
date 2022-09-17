import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "./index.css";
import axios from "../../helpers/axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { login } from "../../actions";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState("");
   const [error, setError] = useState("");
   const auth = useSelector((state: any): any => state.auth);

   const dispatch = useDispatch();
   let token = window.localStorage.getItem("user");

   const userLogin = (e: any) => {
      e.preventDefault();
      const user = {
         email,
         password,
      };
      console.log(user);
      dispatch(login(user));

      /* axios
         .post("http://localhost:3001/api/admin/signin", { ...user })
         .then((res) => {
            //console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(token);
         })
         .catch((error) => {
            console.log(error.response.data);
         }); */
   };
   if (token) {
      console.log(user);
      return <Navigate to={"/"} replace={true} />;
   }

   return (
      <>
         <Header />
         <Container>
            <form onSubmit={userLogin}>
               <Input
                  label={"Usuario"}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu Usuario"}
                  errorMessage={"Usuario incorrecto"}
                  value={email}
                  error={false}
                  className={""}
                  onChange={(e: any) => setEmail(e.target.value)}
               />
               <Input
                  label={"Contraseña"}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu Contraseña"}
                  errorMessage={"Contraseña incorrecta"}
                  value={password}
                  error={false}
                  className={""}
                  onChange={(e: any) => setPassword(e.target.value)}
               />
               <Button
                  type={undefined}
                  url={""}
                  className={""}
                  onClick={undefined}
               >
                  Ingresar
               </Button>
            </form>
         </Container>
      </>
   );
}

export default Login;
