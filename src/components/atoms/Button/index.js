import React from "react";
import "./button.scss";

const Button = ({ label, ...rest }) => {
  return (
    <div>
      <button className="button" {...rest}>
        {label}
      </button>
    </div>
  );
};

export default Button;
