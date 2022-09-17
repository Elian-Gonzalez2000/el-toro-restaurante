import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { getAllUsers } from "../../actions";

function EditUsers() {
   const { useremail } = useParams();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [identificationCard, setIdentificationCard] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");
   const [user, setUser] = useState({});
   const users = useSelector((state: any) => state.auth);
   const dispatch = useDispatch();

   const handleClose = (e: any) => {
      e.preventDefault();
      const form = new FormData();
      form.append("firstName", firstName);
      form.append("lastName", lastName);
      form.append("email", email);
      form.append("identificationCard", identificationCard);
      form.append("password", password);
      form.append("role", role);
      //console.log(user.user.email);

      /* console.log([
         firstName,
         lastName,
         identificationCard,
         email,
         password,
         role,
      ]); */

      axios
         .put(`/admin/user/${useremail}`, {
            firstName,
            lastName,
            identificationCard,
            email,
            password,
            role,
         })
         .then((res) => {
            console.log(res.data);
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   };

   useEffect(() => {
      axios
         .get(`/admin/user/${useremail}`)
         .then((res) => {
            setUser({ ...res.data[0] });
            setFirstName(res.data[0].firstName);
            setLastName(res.data[0].lastName);
            setIdentificationCard(res.data[0].identificationCard);
            setEmail(res.data[0].email);
            setPassword(res.data[0].password);
            setRole(res.data[0].role);
            console.log([...res.data]);
            //dispatch(getAllUsers());
         })
         .catch((error) => {
            console.log(error.response.data);
         });
   }, []);

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
               Editar Usuario{" "}
               <Button
                  url={"/usuarios-registrados"}
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
                  className={""}
                  placeholder={"Ingresa el primer nombre del usuario"}
                  errorMessage={"Nombre no valido"}
                  value={firstName}
                  error={false}
                  onChange={(e: any) => setFirstName(e.target.value)}
               />
               <Input
                  label={"Apellido: "}
                  type={"text"}
                  name={""}
                  className={""}
                  placeholder={"Ingresa el apellido del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={lastName}
                  error={false}
                  onChange={(e: any) => setLastName(e.target.value)}
               />
               <Input
                  label={"Numero de cedula: "}
                  type={"text"}
                  name={""}
                  className={""}
                  placeholder={"Ingresa el numero de cedula del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={identificationCard}
                  error={false}
                  onChange={(e: any) => setIdentificationCard(e.target.value)}
               />
               <Input
                  label={"Correo electronico: "}
                  type={"text"}
                  name={""}
                  className={""}
                  placeholder={"Ingresa el correo electronico del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={email}
                  error={false}
                  onChange={(e: any) => setEmail(e.target.value)}
               />
               <Input
                  label={"Password: "}
                  type={"text"}
                  name={""}
                  className={""}
                  placeholder={"Ingresa la contraseña del usuario"}
                  errorMessage={"Fecha no valida"}
                  value={password}
                  error={false}
                  onChange={(e: any) => setPassword(e.target.value)}
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

               <button type="submit">Editar</button>
            </form>
         </Container>
      </Layout>
   );
}

export default EditUsers;
