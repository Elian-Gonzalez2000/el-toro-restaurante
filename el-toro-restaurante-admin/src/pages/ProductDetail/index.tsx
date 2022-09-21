import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProduct, getProductById } from "../../actions";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import productImage from "../../../../el-toro-restaurante-backend/src/uploads/hEHm02E92-hero-image3.jpg";
import { urlImages } from "../../urlConfig";
import Card from "../../components/UI/Card";
import "./index.css";

function Products() {
   const { id } = useParams();
   const [product, setProduct] = useState([]);
   const products = useSelector((state: any) => state.product);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProductById(id));
      if (products.product) {
         setProduct(products.product);
      }
   }, []);

   console.log(product);

   return (
      <Layout>
         <Container className={"product-detail-section"}>
            <h2>Producto: {products.product.name}</h2>
            <Button
               type=""
               url={"./edit"}
               className={"details-button edit"}
               onClick={""}
            >
               Editar
            </Button>
            <Button
               type=""
               url={undefined}
               className={"details-button detail-delete"}
               onClick={""}
            >
               Eliminar
            </Button>
            <div className="products-cards-details-container">
               {products.product?.productPicture && (
                  <>
                     <div className="card-details">
                        <div className="card-details-info">
                           <h4>{products.product.name}</h4>
                           <p>Precio: {products.product.price}</p>
                           <p>{products.product.description}</p>
                           {/* <Button
                              url={""}
                              className={""}
                              onClick={undefined}
                              type={""}
                              >
                              Añadir al carrito
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
