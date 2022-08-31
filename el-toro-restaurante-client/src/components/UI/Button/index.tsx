import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface Props {
   children: any;
   url: any;
}

function Button({ children, url }: Props) {
   return (
      <>
         <button>{url ? <Link to={url}>{children}</Link> : children}</button>
      </>
   );
}

export default Button;
