import React from "react";
import "../TextImage.css";

const TextImage = ({ imageUrl, className, children }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <span style={style} className={`text-image ${className || ""}`}>
      {children}
    </span>
  );
};

export default TextImage;
