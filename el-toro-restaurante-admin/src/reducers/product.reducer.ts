import { productConstants } from "../actions/constants";

const initialState = {
   product: [],
   products: [],
   authenticate: false,
   authenticating: false,
   loading: false,
   error: null,
   message: "",
};

export default (state = initialState, action: any) => {
   switch (action.type) {
      case productConstants.CREATE_PRODUCT_SUCCESS:
         state = {
            ...state,
            message: action.payload,
         };
         break;

      case productConstants.GET_ALL_PRODUCTS_SUCCESS:
         state = {
            ...state,
            products: action.payload,
         };
         break;

      case productConstants.GET_PRODUCTS_BY_ID_SUCCESS:
         state = {
            ...state,
            product: action.payload,
         };
         break;
   }
   return state;
};
