import React from "react";
import "./coustom-button.style.scss";
export default function CustomButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
