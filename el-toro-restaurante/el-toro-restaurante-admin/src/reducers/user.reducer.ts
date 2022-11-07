import { userConstants } from "../actions/constants";
import Users from "../pages/Users";

interface Users {
   id: string;
   firstName: string;
   lastName: string;
   identificationCard: string;
   fullName: string;
   email: string;
   password: string;
   role: string;
   createdAt: string;
   updatedAt: string;
}

const initialState = {
   users: [Users],
   message: "",
   error: null,
   loading: false,
};

export default (state = initialState, action: any) => {
   //console.log(action);
   switch (action.type) {
      case userConstants.USER_REGISTER_REQUEST:
         state = {
            ...state,
            loading: true,
         };
         break;

      case userConstants.USER_REGISTER_SUCCESS:
         state = {
            ...state,
            loading: false,
            message: action.payload.message,
         };
         break;

      case userConstants.USER_REGISTER_FAILURE:
         state = {
            ...state,
            loading: false,
            error: action.payload.error,
         };
         break;

      case userConstants.GET_USERS_SUCCESS:
         state = {
            ...state,
            users: [...action.payload],
         };
         break;

      case userConstants.DELETE_USER_SUCCESS:
         state = {
            ...state,
            message: action.payload.message,
         };
         break;
   }
   return state;
};
