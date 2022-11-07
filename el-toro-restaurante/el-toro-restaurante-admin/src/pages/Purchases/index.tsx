import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct, getInitialData } from "../../actions";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { urlImages } from "../../urlConfig";
import Card from "../../components/UI/Card";
import "./index.css";
import axios from "../../helpers/axios.js";
import Input from "../../components/UI/Input";
import Swal from "sweetalert2";

function Purchases() {
   const [allPurchases, setAllPurchases] = useState([]);
   const [selectedOption, setSelectedOption] = useState("");
   const purchases = useSelector((state: any) => state.purchases);
   const dispatch = useDispatch();

   useEffect(() => {
      //dispatch(getAllProduct());
      dispatch(getInitialData());
   }, []);

   useEffect(() => {
      //dispatch(getAllProduct());
      if (purchases.purchases) {
         setAllPurchases(purchases.purchases);
      }
   }, [purchases.purchases]);
   console.log(purchases.purchases);

   const handleRadioClick = (e: any) => {
      console.log(e);
      setSelectedOption(e.target.value);
      console.log(selectedOption);
   };

   const handleClick = (e: any) => {
      axios
         .delete(`/admin/purchases/${selectedOption}`)
         .then((res) => {
            console.log(res);
            dispatch(getInitialData());
            Swal.fire({
               icon: "success",
               title: `Compra eliminada satisfactoriamente`,
            });
         })
         .catch((error) => {
            console.log(error.response);
            Swal.fire({
               icon: "error",
               title: `Algo paso`,
            });
         });
   };

   const verifiedPurchase = (e: any) => {
      console.log(e.target.parentElement.parentElement.dataset.id);
      let divId = e.target.parentElement.parentElement.dataset.id;
      const purchase = allPurchases.find((el: any) => el.id === divId);
      console.log(allPurchases.find((el: any) => el.id === divId));

      axios
         .put(`/admin/purchases/${divId}`, purchase)
         .then((res) => {
            //console.log(res);
            dispatch(getInitialData());
            Swal.fire({
               icon: "success",
               title: `Compra verificada`,
            });
         })
         .catch((error) => {
            console.log(error.response);
            Swal.fire({
               icon: "error",
               title: `Algo paso`,
            });
         });
   };

   return (
      <Layout>
         <Container className={"products-section purchases-section"}>
            <h2>Compras o Pedidos</h2>
            <div>
               <Button
                  type=""
                  url={""}
                  className={`product-button purchase-button`}
                  onClick={handleClick}
               >
                  Eliminar compra
               </Button>
            </div>
            <div className="products-cards-container purchases-cards-container">
               {allPurchases &&
                  allPurchases.map((el: any, index) => {
                     //console.log(el);
                     let products = JSON.parse(el.products);
                     //console.log(products);
                     return (
                        <div data-id={el.id}>
                           <div style={{ marginBottom: ".25rem" }}>
                              <input
                                 type="radio"
                                 name="purchase"
                                 value={el.id}
                                 checked={selectedOption === el.id}
                                 onChange={handleRadioClick}
                              />{" "}
                              <span> Seleccionar para eliminar?</span>
                           </div>
                           <p>
                              <strong>Nombre: </strong>
                              {el.name}
                           </p>
                           <p>
                              <strong>Telefono: </strong>
                              {el.cellphone}
                           </p>
                           <p>
                              <strong>Cedula: </strong>
                              {el.ci}
                           </p>
                           <p>
                              <strong>Correo electronico: </strong>
                              {el.email}
                           </p>
                           <p>
                              <strong>Precio a cancelar: </strong>${el.total} o{" "}
                              {(+el.total * 8.2).toFixed(2)} bolivares
                           </p>
                           <p>
                              <strong>Verificar: </strong>
                              {"   "}

                              {!el.verified ? (
                                 <Button
                                    type=""
                                    url={""}
                                    className={`product-button purchase-button`}
                                    onClick={verifiedPurchase}
                                 >
                                    Verificar
                                 </Button>
                              ) : (
                                 <span>Verificado</span>
                              )}
                           </p>
                           <div>
                              <p>
                                 <strong>Productos pedidos: </strong>
                              </p>
                              {products &&
                                 products.map((product: any) => {
                                    return <p>- {product.name}</p>;
                                 })}
                           </div>
                        </div>
                     );
                  })}
            </div>
         </Container>
      </Layout>
   );
}

export default Purchases;
