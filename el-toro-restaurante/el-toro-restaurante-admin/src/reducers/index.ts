import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import purchasesReducer from "./purchases.reducer";

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
   product: productReducer,
   purchases: purchasesReducer,
   // category: categoryReducer,
   //order: orderReducer,
   // product: productReducer,
});

export default rootReducer;
