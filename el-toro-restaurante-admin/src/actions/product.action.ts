import axios from "../helpers/axios.js";
import { productConstants } from "./constants.js";

export const getAllProduct = (product: any) => {
   return async (dispatch: any) => {
      const res = await axios.get("/admin/products");
      if (res.status === 200) {
         console.log(res);
         dispatch({
            type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data,
         });
      }
   };
};

export const createProduct = (product: any) => {
   return async (dispatch: any) => {
      const res = await axios.post("/admin/product/create", { product });
      if (res.status === 201) {
         dispatch({
            type: productConstants.CREATE_PRODUCT_SUCCESS,
            payload: res.data.message,
         });
      }
   };
};
