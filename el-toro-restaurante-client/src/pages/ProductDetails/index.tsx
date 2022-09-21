import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import hamburger from "../../assets/hamburguesa.jpg";
import "./index.css";
import Button from "../../components/UI/Button";
import { useParams } from "react-router";
import Container from "../../components/UI/Container";
import { getProductById } from "../../actions";
import { urlImages } from "../../urlConfig";

function ProductDetails() {
   const { id } = useParams();
   const [product, setProduct] = useState([]);
   const products = useSelector((state: any) => state.product);
   const dispatch = useDispatch();
   const { name, price, description, productPicture } = products.product;

   useEffect(() => {
      dispatch(getProductById(id));
      if (products.product) {
         setProduct(products.product);
      }
   }, []);
   console.log(id);
   return (
      <Layout info={true} direction={true}>
         <Container className={"card-details"}>
            <div className="card">
               <div className="card-details-info">
                  <h4>{name}</h4>
                  <p>Precio: ${price}</p>
                  <p>{description}</p>
                  <Button url={""} className={""} onClick={undefined}>
                     Añadir al carrito
                  </Button>
               </div>
               {productPicture &&
                  productPicture.split(";").map((image: any) => {
                     if (image) {
                        return (
                           <>
                              <div className="card-details-img">
                                 <img
                                    src={`${urlImages}${image}`}
                                    alt="hamburguesa"
                                 />
                              </div>
                           </>
                        );
                     }
                  })}
            </div>
         </Container>
      </Layout>
   );
}

export default ProductDetails;
