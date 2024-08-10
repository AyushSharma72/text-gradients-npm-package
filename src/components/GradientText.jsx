import React from "react";
import "../styles.css";

const GradientText = ({ color, className, children, ...props }) => {
  const ClassName = `${color ? color.toLowerCase() : ""} ${className || ""}`;

  return (
    <span className={ClassName} {...props}>
      {children}
    </span>
  );
};

export default GradientText;
