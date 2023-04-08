import React from "react";
import './imageHolder.css'

const ImageHolder = ({ imgUrl, alt }) => {
  return (
    <div className="imgHolderContainer">
      <img src={imgUrl} alt={alt} />
    </div>
  );
};

export default ImageHolder;
