import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { payProductsCart, sendPurchaseEmail } from "../../actions";

function BuyProducts() {
   const [clientName, setClientName] = useState<string>("");
   const [price, setPrice] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [cellphone, setCellphone] = useState<string>("");
   const [ci, setCi]: Array<any> = useState([]);
   const productIntoCart = useSelector((state: any) => state.cart);
   const dispatch = useDispatch();

   const handleClose = (e: React.FormEvent) => {
      e.preventDefault();
      const form = new FormData();
      form.append("name", clientName);
      form.append("email", email);
      form.append("price", price);
      form.append("cellphone", cellphone);
      form.append("ci", ci);
      form.append("products", productIntoCart.cart);

      const payProduct = {
         name: clientName,
         price,
         email,
         cellphone,
         ci,
         products: productIntoCart.cart,
      };
      console.log(payProduct);
      dispatch(payProductsCart(payProduct));
      dispatch(sendPurchaseEmail(payProduct));
   };

   const totalPrice = (cart: any) => {
      let unitPrice: Array<any> = [];
      let returnPrice: any = 0;
      cart &&
         cart.forEach((product: any) => {
            return unitPrice.push(product.price);
         });
      if (cart.length > 0) {
         unitPrice.forEach((el: any) => {
            returnPrice = returnPrice + Number(el);
         });
         setPrice(returnPrice);
         return returnPrice;
      }
   };
   useEffect(() => {
      if (productIntoCart?.cart.length > 0) {
         totalPrice(productIntoCart?.cart);
      }
   });

   return (
      <Layout info={false} direction={true}>
         <Container className={"buy-products"}>
            <h2
               style={{
                  textAlign: "center",
                  margin: "2rem auto",
                  position: "relative",
               }}
            >
               Comprar productos{" "}
               <Button
                  url={"/productos"}
                  className={"return"}
                  onClick={undefined}
               >
                  Regresar
               </Button>
            </h2>
            <form onSubmit={handleClose}>
               <Input
                  label={"Nombre del cliente: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu nombre y apellido"}
                  errorMessage={"Nombre no valido"}
                  value={clientName}
                  error={false}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                     setClientName((e.target as HTMLInputElement).value)
                  }
                  className={""}
               />
               <Input
                  label={"Numero de telefono del cliente: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu numero de telefono"}
                  errorMessage={"Nombre no valido"}
                  value={cellphone}
                  error={false}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                     setCellphone((e.target as HTMLInputElement).value)
                  }
                  className={""}
               />
               <Input
                  label={"Cedula del cliente: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu numero de cedula"}
                  errorMessage={"Nombre no valido"}
                  value={ci}
                  error={false}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                     setCi((e.target as HTMLInputElement).value)
                  }
                  className={""}
               />
               <Input
                  label={"Correo electronico del cliente: "}
                  type={"text"}
                  name={""}
                  placeholder={"Ingresa tu correo electronico"}
                  errorMessage={"Fecha no valida"}
                  value={email}
                  error={false}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                     setEmail((e.target as HTMLInputElement).value)
                  }
                  className={""}
               />
               <Input
                  label={"Precio: "}
                  type={"text"}
                  name={""}
                  placeholder={"El precio total es..."}
                  errorMessage={"Fecha no valida"}
                  value={price}
                  error={false}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                     setPrice((e.target as HTMLInputElement).value)
                  }
                  className={""}
               />

               <button type="submit">Crear</button>
            </form>
         </Container>
      </Layout>
   );
}

export default BuyProducts;
