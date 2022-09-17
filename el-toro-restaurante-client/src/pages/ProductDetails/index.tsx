import * as React from "react";
import Layout from "../../components/Layout";
import hamburger from "../../assets/hamburguesa.jpg";
import "./index.css";
import Button from "../../components/UI/Button";
import { useParams } from "react-router";
import Container from "../../components/UI/Container";

function Products() {
   const { id } = useParams();
   console.log(id);
   return (
      <Layout info={true} direction={true}>
         <Container className={"card-details"}>
            <div className="card">
               <div className="card-details-img">
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <div className="card-details-info">
                  <h4>TORO CLASSIC BURGER</h4>
                  <p>Precio: 5$</p>
                  <p>Hamburguesa clasica del Toro</p>
                  <Button url={""} className={""} onClick={undefined}>
                     Añadir al carrito
                  </Button>
               </div>
            </div>
         </Container>
      </Layout>
   );
}

export default Products;
