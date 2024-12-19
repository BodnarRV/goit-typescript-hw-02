import React from "react";
import "./ImageCard.css";

interface IImageCarsProps {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ImageCard: React.FC<IImageCarsProps> = ({ src, alt, onClick }) => {
  return (
    <div className="img-container" onClick={onClick}>
      <img className="img" src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
