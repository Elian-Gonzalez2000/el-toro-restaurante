import axios from "../helpers/axios.js";
import {
   initialDataConstants,
   userConstants,
   productConstants,
} from "./constants";

export const getInitialData = () => {
   return async (dispatch: any) => {
      try {
         const res = await axios.get("/admin/initialdata");
         if (res.status === 200) {
            console.log(res.data);
            const { users, products } = res.data;
            dispatch({
               type: userConstants.GET_USERS_SUCCESS,
               payload: [...users],
            });
            dispatch({
               type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
               payload: [...products],
            });
         }
      } catch (err: any) {
         const { status, data } = err.response;
         console.log(data);
         /* if (status === 400) {
            dispatch({
               type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
               payload: { err: data.message },
            });
            dispatch({
               type: productConstants.GET_ALL_PRODUCTS_FAILURE,
               payload: { err: data.message },
            });
         } */
      }
   };
};
