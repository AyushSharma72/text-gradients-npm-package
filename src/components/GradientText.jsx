import React from "react";
import "../styles.css";

const GradientText = ({ color, className, children }) => {
  const ClassName = `${color ? color.toLowerCase() : ""} ${className || ""}`;

  return <span className={ClassName}>{children}</span>;
};

export default GradientText;
