import * as React from "react";
import Layout from "../../components/Layout";
import hamburger from "../../assets/hamburguesa.jpg";
import Button from "../../components/UI/Button";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import Container from "../../components/UI/Container";

function Products() {
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
            <div className="card">
               <div>
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <h4>TORO CLASSIC BURGER MENU</h4>
               <Button
                  url={"./hamburguer/1"}
                  className={undefined}
                  onClick={undefined}
               >
                  Detalles
               </Button>
            </div>
            <div className="card">
               <div>
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <h4>TORO CLASSIC BURGER MENU</h4>
               <Button
                  url={"./hamburguer/2"}
                  className={undefined}
                  onClick={undefined}
               >
                  Detalles
               </Button>
            </div>
            <div className="card">
               <div>
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <h4>TORO CLASSIC BURGER MENU</h4>
               <Button
                  url={"./hamburguer/3"}
                  className={undefined}
                  onClick={undefined}
               >
                  Detalles
               </Button>
            </div>
            <div className="card">
               <div>
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <h4>TORO CLASSIC BURGER MENU</h4>
               <Button
                  url={"./hamburguer/4"}
                  className={undefined}
                  onClick={undefined}
               >
                  Detalles
               </Button>
            </div>
            <div className="card">
               <div>
                  <img src={hamburger} alt="hamburguesa" />
               </div>
               <h4>TORO CLASSIC BURGER MENU</h4>
               <Button
                  url={"./hamburguer/5"}
                  className={undefined}
                  onClick={undefined}
               >
                  Detalles
               </Button>
            </div>
         </Container>
      </Layout>
   );
}

export default Products;
