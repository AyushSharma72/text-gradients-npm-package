import React from "react";
import "../TextImage.css";

const TextImage = ({
  imageUrl,
  className = "",
  cover = false,
  pos = "0%",
  children,
}) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: pos,
    backgroundSize: cover ? "cover" : "auto",
  };

  return (
    <span style={style} className={`text-image ${className}`}>
      {children}
    </span>
  );
};

export default TextImage;
