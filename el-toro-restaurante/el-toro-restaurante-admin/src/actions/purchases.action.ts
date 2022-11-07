import axios from "../helpers/axios";
import { cartConstants } from "./constants.js";

export const addToCart = (product: any) => {
   return (dispatch: any) => {
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
   return (dispatch: any) => {
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
   return (dispatch: any) => {
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
   return async (dispatch: any) => {
      try {
         const res = await axios.post("/admin/purchases", form);
         if (res.status === 200) {
            console.log(res, form);
            dispatch({
               type: cartConstants.CART_PAY_SUCCESS,
               message:
                  "Compra realizada correctamente, en espera del pago y verificacion",
            });
         } else {
            console.log("error");
         }
      } catch (error) {
         console.log(error);
      }
   };
};

export const sendPurchaseEmail = (data: any) => {
   return async (dispatch: any) => {
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
