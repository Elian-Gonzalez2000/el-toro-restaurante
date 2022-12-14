import { cartConstants } from "../actions/constants";

interface IinitialStateCart {
   cart: Array<any>;
   purchases: Array<any>;
   totalPrice: number;
   authenticate: boolean;
   authenticating: boolean;
   loading: boolean;
   error: null;
   message: string;
}
const initialState: IinitialStateCart = {
   cart: [],
   purchases: [],
   totalPrice: 0,
   authenticate: false,
   authenticating: false,
   loading: false,
   error: null,
   message: "",
};

export default (state = initialState, action: any) => {
   switch (action.type) {
      case cartConstants.ADD_TO_CART_SUCCESS:
         state = {
            ...state,
            cart: [...state.cart, action.payload],
         };
         break;
      case cartConstants.DELETE_TO_CART_SUCCESS:
         state = {
            ...state,
            cart: [...action.payload],
         };
         break;
      case cartConstants.GET_TOTAL_PRICE_SUCCESS:
         state = {
            ...state,
            totalPrice: action.payload,
         };
         break;
      case cartConstants.CART_PAY_SUCCESS:
         state = {
            ...state,
            message: action.payload,
         };
         break;
   }
   return state;
};
