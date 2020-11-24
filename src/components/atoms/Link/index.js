import React from "react";
import "./link.scss";

const Link = ({ label, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      {label}
    </p>
  );
};

export default Link;
