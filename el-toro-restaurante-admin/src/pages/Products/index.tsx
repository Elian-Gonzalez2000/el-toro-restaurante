import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../actions";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { urlImages } from "../../urlConfig";
import Card from "../../components/UI/Card";
import "./index.css";

function Products() {
   const [allProducts, setAllProducts] = useState([]);
   const products = useSelector((state: any) => state.product);
   const dispatch = useDispatch();

   useEffect(() => {
      //dispatch(getAllProduct());
      if (products.products) {
         setAllProducts(products.products);
      }
   }, [products.products]);
   console.log(allProducts);

   const handleClick = (e: any) => {};

   return (
      <Layout>
         <Container className={"products-section"}>
            <h2>Productos</h2>
            <div>
               <Button
                  type=""
                  url={"./create"}
                  className={`product-button`}
                  onClick={undefined}
               >
                  Crear producto
               </Button>
            </div>
            <div className="products-cards-container">
               {allProducts &&
                  allProducts.map((el: any, index) => {
                     console.log(el);
                     return (
                        <>
                           <Card
                              key={"image" + el.id}
                              className={""}
                              data={el}
                              url={`./${el.category}/${el.id}`}
                              onClick={undefined}
                           />
                        </>
                     );
                  })}
            </div>
         </Container>
      </Layout>
   );
}

export default Products;
