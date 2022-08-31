import * as React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import logoNenesBurger from "../../assets/nenesburger.jpg";
import "./index.css";
import Container from "../../components/UI/Container";

function HomePage() {
   return (
      <Layout>
         <section className="hero-image">
            <aside className="hero-image-opacity">
               <div className="restaurant-info">
                  <div className="restaurant-logo">
                     <img src={logoNenesBurger} alt="logo" />
                  </div>
                  <Button url={"/productos"}>Nuestros productos</Button>
                  <h3>Las mejores hamburguesas de cabimas</h3>
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
            <section className="menus">
               <div>
                  <h3>Menus y productos</h3>
               </div>
            </section>
         </Container>
         <section className="direction">
            <div className="direction-container">
               <h4>Direccion</h4>
            </div>
         </section>
         <Container>
            <section className="restaurant-information">
               <div className="privacy-information">
                  <h4>Privacidad</h4>
               </div>
               <div></div>
               <div className="contact-information">
                  <h4>Contacto</h4>
               </div>
            </section>
            <footer>
               <p>All reserved | nenesburger.com, 2022</p>
            </footer>
         </Container>
      </Layout>
   );
}

export default HomePage;
