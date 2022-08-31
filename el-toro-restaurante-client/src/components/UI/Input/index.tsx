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
}

const Input = (props: Props) => {
   const { label, type, placeholder, value, onChange, errorMessage, error } =
      props;
   return (
      <div className="input">
         <label>{label}</label>
         <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         {error && <p className="error-message">{errorMessage}</p>}
      </div>
   );
};

export default Input;
