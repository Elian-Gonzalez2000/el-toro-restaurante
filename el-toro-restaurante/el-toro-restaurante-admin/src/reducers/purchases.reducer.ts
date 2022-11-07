import { productConstants, purchasesConstants } from "../actions/constants";

const initialState = {
   purchases: [],
   authenticate: false,
   authenticating: false,
   loading: false,
   error: null,
   message: "",
};

export default (state = initialState, action: any) => {
   switch (action.type) {
      case purchasesConstants.PURCHASES_SUCCESS:
         state = {
            ...state,
            purchases: action.payload,
         };
         break;
   }
   return state;
};
