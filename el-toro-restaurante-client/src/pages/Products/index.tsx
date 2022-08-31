import * as React from "react";
import Layout from "../../components/Layout";
import hamburger from "../../assets/hamburguesa.jpg";
import "./index.css";
import Button from "../../components/UI/Button";

function Products() {
   return (
      <Layout>
         <div className="card">
            <div>
               <img src={hamburger} alt="hamburguesa" />
            </div>
            <h4>TORO CLASSIC BURGER MENU</h4>
            <p>100% Carne</p>
            <Button url={"hamburguer"}>Detalles</Button>
         </div>
      </Layout>
   );
}

export default Products;
