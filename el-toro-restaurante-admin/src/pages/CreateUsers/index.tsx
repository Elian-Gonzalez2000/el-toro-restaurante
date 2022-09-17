import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { signup } from "../../actions";

function CreateUsers() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [identificationCard, setIdentificationCard] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");
   const dispatch = useDispatch();

   const handleClose = (e: any) => {
      e.preventDefault();
      const form = new FormData();
      form.append("firstName", firstName);
      form.append("lastName", lastName);
      form.append("email", email);
      form.append("identificationCard", identificationCard);
      form.append("fullname", `${firstName} ${lastName}`);
      form.append("password", password);
      form.append("role", role);
      //console.log(user.user.email);

      console.log([
         firstName,
         lastName,
         identificationCard,
         email,
         password,
         role,
      ]);

      const user = {
         firstName,
         lastName,
         identificationCard,
         email,
         password,
         role,
      };
      dispatch(signup({ ...user }));
   };
   return (
      <Layout>
         <Container className={"create-users"}>
            <h2
               style={{
                  textAlign: "center",
                  margin: "2rem auto",
                  position: "relative",
               }}
            >
               Crear Actividades{" "}
               <Button
                  url={"/usuarios"}
                  className={"return"}
                  type={undefined}
                  onClick={undefined}
               >
                  Regresar
               </Button>
            </h2>
            <form onSubmit={handleClose}>
               <Input
                  label={"Primer nombre: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el primer nombre del usuario"}
                  errorMessage={"Nombre no valido"}
                  value={firstName}
                  error={false}
                  onChange={(e: any) => setFirstName(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Apellido: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el apellido del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={lastName}
                  error={false}
                  onChange={(e: any) => setLastName(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Numero de cedula: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el numero de cedula del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={identificationCard}
                  error={false}
                  onChange={(e: any) => setIdentificationCard(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Correo electronico: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el correo electronico del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={email}
                  error={false}
                  onChange={(e: any) => setEmail(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Password: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa la contraseña del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={password}
                  error={false}
                  onChange={(e: any) => setPassword(e.target.value)}
                  className={""}
               />
               <div className="input" style={{ marginBottom: "2rem" }}>
                  <label>Rol del usuario:</label>
                  <select
                     className="form-control"
                     value={role}
                     onChange={(e: any) => setRole(e.target.value)}
                  >
                     <option>Selecciona el rol</option>
                     <option value="superadmin">Super admin</option>
                     <option value="admin">Admin</option>
                  </select>
               </div>

               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default CreateUsers;
