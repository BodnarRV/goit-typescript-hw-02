import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { IImage } from "./api";
import "./ImageGallery.css";

export interface IImageGalleryProps {
  images: IImage[];
  onImageClick: (image: IImage) => void;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className="images-list">
      {images.map((img) => (
        <li className="image-item" key={img.id}>
          <ImageCard
            src={img.urls.small}
            alt={img.alt_description}
            onClick={() => onImageClick(img)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
