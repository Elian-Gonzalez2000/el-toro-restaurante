import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
productReducer;

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer,
   product: productReducer,
   // category: categoryReducer,
   //order: orderReducer,
   // product: productReducer,
});

export default rootReducer;
