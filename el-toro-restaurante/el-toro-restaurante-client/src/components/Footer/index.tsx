import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Button from "../UI/Button";
import logoElToro from "../../assets/el-toro-logo.jpg";
import "./index.css";
import Container from "../UI/Container";

interface Props {
   direction: boolean | undefined;
}

const Footer = ({ direction }: Props) => {
   return (
      <>
         <section className="direction">
            <div className="direction-container">
               <h3>Direccion: </h3>
               <p>
                  Pasando el hotel D'Maio - Calle de la U.E - Diagonal a la
                  ferreteria silvestre{" "}
               </p>
               <p>Martes a Domingo - 8:00AM / 10:30PM</p>
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
               <p>All reserved | tostadaseltoro.com, 2022</p>
            </footer>
         </Container>
      </>
   );
};

export default Footer;
