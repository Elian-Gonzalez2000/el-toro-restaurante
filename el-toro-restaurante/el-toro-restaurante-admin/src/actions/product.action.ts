import Swal from "sweetalert2";
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

export const createProduct = (form: any) => {
   return async (dispatch: any) => {
      try {
         const res = await axios.post("/admin/product/create", form);
         if (res.status === 201) {
            console.log(res.data);
            dispatch({
               type: productConstants.CREATE_PRODUCT_SUCCESS,
               payload: res.data.message,
            });
            Swal.fire({
               icon: "success",
               title: `Producto creado correctamente`,
            });
         }
      } catch (error) {
         console.log(error);
         Swal.fire({
            icon: "error",
            title: `Algo salio mal`,
         });
      }
   };
};

export const getProductById = (id: any) => {
   return async (dispatch: any) => {
      const res = await axios.get(`/admin/product/${id}`);
      if (res.status === 200) {
         console.log(res.data);
         dispatch({
            type: productConstants.GET_PRODUCTS_BY_ID_SUCCESS,
            payload: res.data,
         });
      }
   };
};

export const editProduct = (id: any, data: any) => {
   return async (dispatch: any) => {
      try {
         const res = await axios.put(`/admin/edituser/${id}`, {
            ...data,
         });
         if (res.data === 200) {
            console.log(res.data);
            Swal.fire({
               icon: "success",
               title: `Producto editado correctamente`,
            });
         }
      } catch (error: any) {
         Swal.fire({
            icon: "error",
            title: `Algo salio mal`,
         });
         console.log(error.response);
      }
   };
};
