/* import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; */
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}

const composeEnhancers =
   (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
   compose;

const Store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default Store;
