import React from "react";
import "./index.css";

interface Props {
   label: any;
   type: any;
   placeholder: any;
   value: any;
   onChange: any;
   errorMessage: any;
   error: any;
   className: any;
   name: any;
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
