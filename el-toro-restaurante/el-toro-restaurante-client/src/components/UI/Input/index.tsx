import React from "react";
import "./index.css";

interface Props {
   label: string;
   type: any;
   placeholder: string;
   value: any;
   onChange: any;
   errorMessage: string;
   error: string;
   className: string;
   name: string;
}

const Input = ({
   label,
   type,
   placeholder,
   value,
   onChange,
   errorMessage,
   error,
   className,
   name,
}: Props) => {
   return (
      <div className={`input ${className ? className : ""}`}>
         <label>{label}</label>
         <input
            type={type}
            name={name ? name : ""}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         {error && <p className="error-message">{errorMessage}</p>}
      </div>
   );
};

export default Input;
