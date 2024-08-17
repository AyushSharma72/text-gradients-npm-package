import React from "react";
import "../styles.css";

const GradientText = ({
  color, // class for gradient
  direction = "right", // direction by default right
  className, // additional classes by user
  children,
  ...props //for props like onclick
}) => {
  const combinedClassName = `${color} ${className || ""}`.trim();

  //  inline style for gradient direction
  const style = {
    "--gradient-direction": `to ${direction}`,
    ...props.style,
  };

  return (
    <span className={combinedClassName} style={style} {...props}>
      {children}
    </span>
  );
};

export default GradientText;
