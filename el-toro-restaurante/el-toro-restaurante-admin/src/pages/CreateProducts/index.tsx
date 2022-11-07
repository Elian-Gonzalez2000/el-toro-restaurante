import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import axios from "../../helpers/axios";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { createProduct } from "../../actions";
import { FaTimes } from "react-icons/fa";

function CreateProducts() {
   const [productName, setProductName] = useState("");
   const [price, setPrice] = useState("");
   const [quantity, setQuantity] = useState("");
   const [description, setDescription] = useState("");
   const [productPictures, setProductPictures]: any = useState([]);
   const [category, setCategory] = useState("");
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
      form.append("quantity", "1");
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
      dispatch(createProduct(form));
   };

   const handleClickPictures = (e: any) => {
      console.log(e);
      console.log(productPictures);
      setProductPictures(
         productPictures.filter(
            (picture: any) => picture.name !== e.target.dataset.picturename
         )
      );
   };

   return (
      <Layout>
         <Container className={"create-products"}>
            <h2
               style={{
                  textAlign: "center",
                  margin: "2rem auto",
                  position: "relative",
               }}
            >
               Crear Productos{" "}
               <Button
                  url={"/productos"}
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
               {/* <Input
                  label={"Cantidad en stock: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa el numero unidades en stock"}
                  errorMessage={"Fecha no valida"}
                  value={quantity}
                  error={false}
                  onChange={(e: any) => setQuantity(e.target.value)}
                  className={""}
               /> */}
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
                  {productPictures.map((picture: any, index: any) => {
                     return (
                        <p
                           key={index + picture.name}
                           onClick={handleClickPictures}
                           className="product-picture-name"
                           data-picturename={picture.name}
                        >
                           {<FaTimes style={{ marginRight: ".5rem" }} />}
                           {picture.name}
                        </p>
                     );
                  })}
               </div>

               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default CreateProducts;
