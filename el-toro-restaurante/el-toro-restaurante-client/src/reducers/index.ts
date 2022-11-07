import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
   // auth: authReducer,
   // user: userReducer,
   product: productReducer,
   cart: cartReducer,
   //order: orderReducer,
   // product: productReducer,
});

export default rootReducer;
