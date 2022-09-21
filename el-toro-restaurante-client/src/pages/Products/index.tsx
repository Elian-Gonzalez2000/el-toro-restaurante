import * as React from "react";
import Layout from "../../components/Layout";
import hamburger from "../../assets/hamburguesa.jpg";
import Button from "../../components/UI/Button";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import Container from "../../components/UI/Container";
import { urlImages } from "../../urlConfig";

function Products() {
   const product = useSelector((state: any) => state.product);
   console.log(product);
   return (
      <Layout info={true} direction={true}>
         <nav className="nav-products">
            <ul>
               <li>
                  <NavLink to={""}>Burgers Menu</NavLink>
               </li>
               <li>
                  <NavLink to={""}>Hot Dog Menu</NavLink>
               </li>
               <li>
                  <NavLink to={""}>Pizzas Menu</NavLink>
               </li>
               <li>
                  <NavLink to={""}>Arepas Menu</NavLink>
               </li>
            </ul>
         </nav>
         <Container className={"cards-container"}>
            {product && product.products.length > 0
               ? product.products.map((el: any) => {
                    return (
                       <>
                          <div className="card">
                             <div>
                                <img
                                   src={`${urlImages}${
                                      el.productPicture.split(";")[0]
                                   }`}
                                   alt="hamburguesa"
                                />
                             </div>
                             <h4>{el.name}</h4>
                             <Button
                                url={`./hamburguer/${el.id}`}
                                className={undefined}
                                onClick={undefined}
                             >
                                Detalles
                             </Button>
                          </div>
                       </>
                    );
                 })
               : null}
         </Container>
      </Layout>
   );
}

export default Products;
