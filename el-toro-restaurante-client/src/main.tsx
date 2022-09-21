import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <Provider store={Store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>
);
