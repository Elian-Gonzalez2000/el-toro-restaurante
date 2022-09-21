import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { createProduct, getAllUsers } from "../../actions";

function EditProduct() {
   const { id } = useParams();
   const [productName, setProductName] = useState("");
   const [price, setPrice] = useState("");
   const [quantity, setQuantity] = useState("");
   const [description, setDescription] = useState("");
   const [productPictures, setProductPictures]: any = useState([]);
   const [category, setCategory] = useState("");
   const users = useSelector((state: any) => state.auth);
   const dispatch = useDispatch();
   let token = JSON.parse(window.localStorage.getItem("user"));

   const handleProductPictures = (e: any) => {
      setProductPictures([...productPictures, e.target.files[0]]);
      //console.log(productPictures);
   };

   const handleClose = (e: any) => {
      e.preventDefault();
      const form = new FormData();
      form.append("name", productName);
      form.append("price", price);
      form.append("description", description);
      form.append("quantity", quantity);
      form.append("category", category);
      form.append("createdBy", token.email);
      for (let pic of productPictures) {
         form.append("productPicture", pic);
         //console.log(pic);
      }

      const product = {
         name: productName,
         price,
         quantity,
         description,
         category,
         productPictures,
      };
      //dispatch(createProduct(form));
   };

   /* useEffect(() => {
      axios
         .get(`/admin/product/edit/${id}`)
         .then((res) => {
            setUser({ ...res.data[0] });
            setName(res.data[0].name);
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
   }, []); */

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
                  label={"Nombre del producto: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el nombre del producto"}
                  errorMessage={"Nombre no valido"}
                  value={productName}
                  error={false}
                  onChange={(e: any) => setProductName(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Precio: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el precio del producto"}
                  errorMessage={"Fecha no valida"}
                  value={price}
                  error={false}
                  onChange={(e: any) => setPrice(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Cantidad en stock: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el numero unidades en stock"}
                  errorMessage={"Fecha no valida"}
                  value={quantity}
                  error={false}
                  onChange={(e: any) => setQuantity(e.target.value)}
                  className={""}
               />
               <Input
                  label={"Descripcion del producto: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa una descripcion para el producto"}
                  errorMessage={"Fecha no valida"}
                  value={description}
                  error={false}
                  onChange={(e: any) => setDescription(e.target.value)}
                  className={""}
               />

               <div className="input" style={{ marginBottom: "2rem" }}>
                  <label>Categoria del producto:</label>
                  <br />
                  <select
                     className="form-control"
                     value={category}
                     onChange={(e: any) => setCategory(e.target.value)}
                  >
                     <option>Selecciona la categoria del producto</option>
                     <option value="hotdog">Hotdog</option>
                     <option value="hamburger">Hamburger</option>
                     <option value="pizzas">Pizzas</option>
                     <option value="arepas">Arepas</option>
                  </select>
               </div>
               <div className="input" style={{ marginBottom: "2rem" }}>
                  <label>Ingresa tus imagenes: </label>
                  <input
                     type="file"
                     name="productPicture"
                     onChange={handleProductPictures}
                  />
               </div>

               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default EditProduct;
