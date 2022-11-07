import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

/* interface Props {
   children: any;
   url: string | undefined;
   className: string | undefined;
   onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
} */

interface Props {
   children: any;
   url: any | undefined;
   className: any | undefined;
   type: string | undefined;
   onClick: any | undefined;
}

function Button({ children, url, className, type, onClick }: Props) {
   return (
      <>
         <button
            className={className && className}
            onClick={onClick}
            type={type}
         >
            {url ? <Link to={url}>{children}</Link> : children}
         </button>
      </>
   );
}

export default Button;
