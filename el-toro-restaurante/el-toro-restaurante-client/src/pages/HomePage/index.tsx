import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import logoElToro from "../../assets/el-toro-logo.jpg";
import menuElToro from "../../assets/hero-image.jpg";
import "./index.css";
import Container from "../../components/UI/Container";

function HomePage() {
   const product = useSelector((state: any) => state.product);
   return (
      <Layout info={false} direction={true}>
         <section className="hero-image">
            <aside className="hero-image-opacity">
               <div className="restaurant-info">
                  <div className="restaurant-logo">
                     <img src={logoElToro} alt="logo" />
                  </div>
                  <Button
                     url={"/productos"}
                     className={undefined}
                     onClick={undefined}
                  >
                     Nuestros productos
                  </Button>
                  <h3>El Buen Sabor de la Comida</h3>
               </div>
            </aside>
         </section>
         <Container>
            <div className="delivery">
               <div className="delivery-container">
                  <span></span>
                  <span className="delivery-message">
                     Hacemos delivery a toda cabimas
                  </span>
                  <span></span>
               </div>
            </div>
            <h2 className="toro-menu">El Toro Menu</h2>
            <section className="menus">
               <div className="menus-img">
                  <img src={menuElToro} alt="Menu el toro" />
               </div>
               {product && product.products.length > 0
                  ? product.products.map((el: any) => {
                       return (
                          <>
                             <div className="menus-info">
                                <h4>{el.name}</h4>
                                <p>{el.description}</p>
                                <span>${el.price}</span>
                             </div>
                          </>
                       );
                    })
                  : null}

               {/* <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>5$</span>
               </div> */}
            </section>
         </Container>
      </Layout>
   );
}

export default HomePage;
