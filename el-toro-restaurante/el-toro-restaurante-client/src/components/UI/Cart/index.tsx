import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import "./index.css";
import Button from "../Button";
import { urlImages } from "../../../urlConfig";
import { deleteToCart } from "../../../actions";
import Swal from "sweetalert2";

function Cart() {
   const [show, setShow] = useState<boolean>(false);
   const [price, setPrice] = useState<string>("");
   const productIntoCart = useSelector((state: any) => state.cart);
   const dispatch = useDispatch();
   //console.log(productIntoCart);

   const handleDeleteCardItem = (e: any) => {
      // console.log("click", e.target.dataset.id);
      // console.log("click", e.target.tagName);
      let deleteProductCart;

      if (e.target.tagName === "path") {
         deleteProductCart = productIntoCart.cart.filter(
            (el: any, index: any) => {
               let id = el.id + index;
               console.log(id);
               return el.id + index !== e.target.parentElement.dataset.id;
            }
         );
      } else {
         deleteProductCart = productIntoCart.cart.filter(
            (el: any, index: any) => {
               let id = el.id + index;
               console.log(id);
               return el.id + index !== e.target.dataset.id;
            }
         );
      }
      dispatch(deleteToCart(deleteProductCart));
   };

   const totalPrice = (cart: any) => {
      let unitPrice: any = [];
      let returnPrice: any = 0;
      cart &&
         cart.forEach((product: any) => {
            return unitPrice.push(product.price);
         });
      if (cart.length > 0) {
         unitPrice.forEach((el: any) => {
            returnPrice = returnPrice + Number(el);
         });
         setPrice(returnPrice);
         return returnPrice;
      }
   };
   useEffect(() => {
      if (productIntoCart?.cart.length > 0) {
         totalPrice(productIntoCart?.cart);
      } else {
         setPrice("");
      }
   });

   const handlePayClick = (e: any) => {
      if (!price) {
         Swal.fire({
            icon: "info",
            title: `Debe escoger algun producto antes de pagar`,
         });
      }
   };

   return (
      <aside className="cart-aside">
         <div className="cart-btn" onClick={(e) => setShow(!show)}>
            <FaShoppingCart />
         </div>
         <div className="cart-products" style={{ left: show ? "60vw" : "" }}>
            <h3>Carrito de compras</h3>
            {productIntoCart &&
               productIntoCart.cart.map((product: any, index: any) => {
                  return (
                     <div className="cart-product" key={index + "productcart"}>
                        <div className="cart-product-img">
                           <img
                              src={`${urlImages}${
                                 product.productPicture.split(";")[0]
                              }`}
                              alt={product.name}
                           />
                        </div>
                        <div className="cart-product-info">
                           <h4>{product.name}</h4>
                           <p>${product.price}</p>
                        </div>
                        <FaTimes
                           data-id={product.id + index}
                           className="times-btn"
                           onClick={handleDeleteCardItem}
                        />
                     </div>
                  );
               })}
            <span style={{ display: "block", marginTop: "auto" }}>
               <p className={"cart-total-price"}>
                  Precio total: ${price ? price : 0}
               </p>
               <Button
                  url={price && "/productos/comprar"}
                  className={`cart-pay-btn ${
                     !price && "cart-pay-btn-disabled"
                  }`}
                  onClick={handlePayClick}
               >
                  Hacer mi compra
               </Button>
            </span>
         </div>
      </aside>
   );
}

export default Cart;
