import { userConstants } from "./constants";
import axios from "../helpers/axios.js";

/* export const signup = (user: any) => {
   return async (dispatch: any) => {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST });
      const res = await axios.post("/admin/signup", {
         ...user,
      });
      //console.log(res);
      if (res.status === 201) {
         const { message } = res.data;
         dispatch({
            type: userConstants.USER_REGISTER_SUCCESS,
            payload: { message },
         });
      } else {
         if (res.status === 400) {
            dispatch({
               type: userConstants.USER_REGISTER_FAILURE,
               payload: { error: res.data.message },
            });
         }
      }

      dispatch({
         type: authConstants.LOGIN_REQUEST,
         payload: {
            ...user,
         },
      });
   };
}; */

export const signup = (user: any) => {
   return async (dispatch: any) => {
      try {
         const res = await axios.post("/admin/signup", { ...user });

         if (res.status === 200) {
            const {
               firstName,
               lastName,
               fullName,
               identificationCard,
               email,
               role,
            } = res.data;
            console.log(res.data);
            //localStorage.setItem("user", JSON.stringify(res.data));

            dispatch({
               type: userConstants.USER_REGISTER_SUCCESS,
               payload: { message: res.data.message },
            });
            const res2 = await axios.get("/admin/getallusers");

            if (res2.status === 200) {
               dispatch({
                  type: userConstants.GET_USERS_SUCCESS,
                  payload: [...res2.data],
               });
               console.log(res2.data);
            }
         }
      } catch (error: any) {
         console.log(error.response);
      }
   };
};

export const getAllUsers = () => {
   return async (dispatch: any) => {
      try {
         const res = await axios.get("/admin/getallusers");
         console.log(res.data);
         if (res.status === 200) {
            dispatch({
               type: userConstants.GET_USERS_SUCCESS,
               payload: [...res.data],
            });
         }
      } catch (error) {}
   };
};

export const editUser = (useremail: any, data: any) => {
   return async (dispatch: any) => {
      try {
         const res = await axios.put(`/admin/edituser/${useremail}`, {
            ...data,
         });
         if (res.data === 200) {
            console.log(res.data);
         }
      } catch (error) {}
   };
};

export const deleteUser = (useremail: any) => {
   return async (dispatch: any) => {
      try {
         const res = await axios.delete(`/admin/user/${useremail}`);

         if (res.status === 200) {
            console.log(res.data);
            dispatch({
               type: userConstants.DELETE_USER_SUCCESS,
               payload: res.data.message,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };
};
