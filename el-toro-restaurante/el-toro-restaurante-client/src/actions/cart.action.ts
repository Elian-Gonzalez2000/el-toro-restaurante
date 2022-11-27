import Swal from "sweetalert2";
import axios from "../helpers/axios..js";
import { cartConstants } from "./constants.js";

export const addToCart = (product: any) => {
   return (dispatch: Function) => {
      try {
         //console.log(product);
         dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: product,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const deleteToCart = (product: any) => {
   return (dispatch: Function) => {
      try {
         //console.log(product);
         dispatch({
            type: cartConstants.DELETE_TO_CART_SUCCESS,
            payload: product,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const getTotalPrice = (product: any) => {
   return (dispatch: Function) => {
      try {
         dispatch({
            type: cartConstants.GET_TOTAL_PRICE_SUCCESS,
            payload: product,
         });
      } catch (error) {
         console.log(error);
      }
   };
};

export const payProductsCart = (form: any) => {
   return async (dispatch: Function) => {
      try {
         const res = await axios.post("/admin/purchases", form);
         if (res.status === 200) {
            console.log(res, form);
            dispatch({
               type: cartConstants.CART_PAY_SUCCESS,
               message:
                  "Compra realizada correctamente, en espera del pago y verificacion",
            });
            Swal.fire({
               icon: "success",
               title: `Compra realizada correctamente, en espera del pago y verificacion`,
               text: `Haga el respectivo pago movil o transferencia y envie el comprobante al siguiente numero de Whastapp junto con su nombre, cedula y correo electronico para identificarlo: 
               +58 424-6666473.`,
               confirmButtonText: "Ok!",
            }).then((result) => {
               /* Read more about isConfirmed, isDenied below */
               if (result.isConfirmed) {
                  window.location.assign("http://127.0.0.1:5173/productos");
               }
            });
            // Swal.fire({
            //    icon: "success",
            //    title: `Compra realizada correctamente, en espera del pago y verificacion`,
            //    text: `Haga el respectivo pago movil o transferencia y envie el comprobante al siguiente numero de Whastapp junto con su nombre, cedula y correo electronico para identificarlo:
            //    +58 424-6666473.`,
            // });
         } else {
            console.log("error");
         }
      } catch (error: any) {
         console.log(error);
         Swal.fire({
            icon: "error",
            title: `${error.response.data.message}`,
         });
      }
   };
};

export const sendPurchaseEmail = (data: any) => {
   return async (dispatch: Function) => {
      try {
         const res = await axios.post("/send-email", data);
         if (res.status === 200) {
            console.log(res, data);
         } else {
            console.log("error");
         }
      } catch (error) {
         console.log(error);
      }
   };
};
