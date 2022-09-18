import React from "react";
import { Link } from "react-router-dom";
import { urlImages } from "../../../urlConfig";
import Button from "../Button";
import "./index.css";

/* interface Props {
   children: any;
   url: string | undefined;
   className: string | undefined;
   onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
} */

interface Props {
   className: any | undefined;
   url: any | undefined;
   data: any | undefined;
   onClick: any | undefined;
}

function Card({ className, url, data, onClick }: Props) {
   return (
      <div className={`card ${className || ""}`}>
         <img
            src={`${urlImages}${data.productPicture.split(";")[0]}`}
            className={`card-img ${className || ""}`}
            alt={data.name}
         />
         <h4>{data.name}</h4>
         <p>{"Precio: $" + data.price}</p>
         <Button
            type=""
            url={url}
            className={`card-button ${className || ""}`}
            onClick={onClick || undefined}
         >
            Detalles
         </Button>
      </div>
   );
}

export default Card;
