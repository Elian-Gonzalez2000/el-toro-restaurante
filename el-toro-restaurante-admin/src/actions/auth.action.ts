import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = (user: any) => {
   return async (dispatch: any) => {
      try {
         //dispatch({ type: authConstants.LOGIN_REQUEST });
         const res = await axios.post("/admin/signin", {
            ...user,
         });
         //console.log(res);
         if (res.status === 200) {
            /* Take the token and user from the response, then save in localStorage with setItem, this permite use the token easly in the application */
            const user = res.data;
            // localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
               type: authConstants.LOGIN_SUCCESS,
               payload: { user },
            });
         }
      } catch (error: any) {
         if (error.response.status === 400) {
            dispatch({
               type: authConstants.LOGIN_FAILURE,
               payload: { error: error.response.data.message },
            });
         }
      }
   };
};

export const isUserLoggedIn = () => {
   return async (dispatch: any) => {
      const user = JSON.parse(localStorage.getItem("user")!);
      if (user) {
         dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: { user },
         });
      } else {
         dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: "Fallo al intentar ingresar" },
         });
      }
   };
};

export const signout = () => {
   return async (dispatch: any) => {
      //dispatch({ type: authConstants.LOGOUT_REQUEST });
      //const res = await axios.post("/admin/signout");

      localStorage.clear();
      dispatch({
         type: authConstants.LOGOUT_SUCCESS,
      });
   };
};
