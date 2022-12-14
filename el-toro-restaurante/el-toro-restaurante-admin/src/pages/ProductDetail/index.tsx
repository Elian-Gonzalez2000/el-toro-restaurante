import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getAllProduct, getInitialData, getProductById } from "../../actions";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import productImage from "../../../../el-toro-restaurante-backend/src/uploads/hEHm02E92-hero-image3.jpg";
import { urlImages } from "../../urlConfig";
import Card from "../../components/UI/Card";
import "./index.css";
import axios from "../../helpers/axios";
import Swal from "sweetalert2";

function Products() {
   const { id } = useParams();
   const [product, setProduct] = useState([]);
   const [deleteProduct, setDeleteProduct] = useState({ message: "" });
   const products = useSelector((state: any) => state.product);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProductById(id));
      if (products.product) {
         setProduct(products.product);
      }
   }, []);

   const handleClick = (e: any) => {
      axios
         .delete(`/admin/product/${id}`)
         .then((res) => {
            //console.log(res.data);
            Swal.fire({
               icon: "success",
               title: `Producto eliminado satisfactoriamente`,
            });
            setDeleteProduct(res.data);
            dispatch(getInitialData());
         })
         .catch((error) =>
            Swal.fire({
               icon: "error",
               title: `Algo paso`,
            })
         );
   };
   if (deleteProduct?.message) {
      return <Navigate to={"/productos"} />;
   }

   // console.log(product);

   return (
      <Layout>
         <Container className={"product-detail-section"}>
            <h2>Producto: {products.product.name}</h2>
            {/* <Button
               type=""
               url={"./edit"}
               className={"details-button edit"}
               onClick={""}
            >
               Editar
            </Button> */}
            <Button
               type=""
               url={undefined}
               className={"details-button detail-delete"}
               onClick={handleClick}
            >
               Eliminar
            </Button>
            <div className="products-cards-details-container">
               {products.product?.productPicture && (
                  <>
                     <div className="card-details">
                        <div className="card-details-info">
                           <h4>{products.product.name}</h4>
                           <p>Precio: ${products.product.price}</p>
                           <p>{products.product.description}</p>
                           {/* <Button
                              url={""}
                              className={""}
                              onClick={undefined}
                              type={""}
                              >
                              A??adir al carrito
                           </Button> */}
                        </div>
                        {products.product?.productPicture.split(";").length >
                        1 ? (
                           products.product?.productPicture
                              .split(";")
                              .map((el: any) => {
                                 console.log(el);
                                 if (el) {
                                    return (
                                       <div className="card-details-img">
                                          <img
                                             src={`${urlImages}${el}`}
                                             alt={products.product?.category}
                                          />
                                       </div>
                                    );
                                 }
                              })
                        ) : (
                           <div className="card-details-img">
                              <img
                                 src={`${urlImages}${
                                    products.product?.productPicture.split(
                                       ";"
                                    )[0]
                                 }`}
                                 alt="hamburguesa"
                              />{" "}
                           </div>
                        )}
                     </div>
                  </>
               )}
            </div>
         </Container>
      </Layout>
   );
}

export default Products;
