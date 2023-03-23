import React from "react";
const PhotosCard = ({ title, thumbnailUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumbnailUrl} alt="" />
    </div>
  );
};
export default PhotosCard;
