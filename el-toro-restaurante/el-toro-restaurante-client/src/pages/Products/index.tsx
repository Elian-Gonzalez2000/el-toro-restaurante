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
                  <a href={"#hamburger"}>Hamburgers Menu</a>
               </li>
               <li>
                  <a href={"#hotdog"}>Hot Dogs Menu</a>
               </li>
               <li>
                  <a href={"#pizzas"}>Pizzas Menu</a>
               </li>
               <li>
                  <a href={"#arepas"}>Arepas Menu</a>
               </li>
            </ul>
         </nav>
         <Container className={"cards-container"}>
            <div className="card-container hamburger" id="hamburger">
               {product && product.products.length > 0
                  ? product.products.map((el: any) => {
                       if (el.category === "hamburger") {
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
                       }
                    })
                  : null}
            </div>
            <div className="card-container hotdog" id="hotdog">
               {product && product.products.length > 0
                  ? product.products.map((el: any) => {
                       if (el.category === "hotdog") {
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
                       }
                    })
                  : null}
            </div>
            <div className="card-container pizzas" id="pizzas">
               {product && product.products.length > 0
                  ? product.products.map((el: any) => {
                       if (el.category === "pizzas") {
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
                       }
                    })
                  : null}
            </div>
            <div className="card-container arepas" id="arepas">
               {product && product.products.length > 0
                  ? product.products.map((el: any) => {
                       if (el.category === "arepas") {
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
                       }
                    })
                  : null}
            </div>
         </Container>
      </Layout>
   );
}

export default Products;
