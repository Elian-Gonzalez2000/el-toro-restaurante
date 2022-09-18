import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../actions";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import productImage from "../../../../el-toro-restaurante-backend/src/uploads/hEHm02E92-hero-image3.jpg";
import { urlImages } from "../../urlConfig";
import Card from "../../components/UI/Card";

function Products() {
   const [allProducts, setAllProducts] = useState([]);
   const products = useSelector((state: any) => state.product);
   const dispatch = useDispatch();

   useEffect(() => {
      //dispatch(getAllProduct());
      if (products.product) {
         setAllProducts(products.product);
      }
   }, [products.product]);
   console.log(allProducts);

   return (
      <Layout>
         <Container>
            <h2>Productos</h2>
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
