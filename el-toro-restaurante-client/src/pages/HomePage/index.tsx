import * as React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import logoElToro from "../../assets/el-toro-logo.jpg";
import menuElToro from "../../assets/hero-image.jpg";
import "./index.css";
import Container from "../../components/UI/Container";

function HomePage() {
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
            <section className="menus">
               <div className="menus-img">
                  <img src={menuElToro} alt="Menu el toro" />
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>6$</span>
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>3$</span>
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>2$</span>
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>5$</span>
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>3$</span>
               </div>
               <div className="menus-info">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <span>5$</span>
               </div>
            </section>
         </Container>

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
               <p>All reserved | tostadaseltoro.com, 2022</p>
            </footer>
         </Container>
      </Layout>
   );
}

export default HomePage;
