import React from "react";
import Modal from "react-modal";
import "./ImageModal.css";
import { IImage } from "../../api";

Modal.setAppElement("#root");

interface IImageModal {
  isOpen: boolean;
  onRequestClose: () => void;
  image: IImage | null;
}

const ImageModal: React.FC<IImageModal> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {image && (
        <div className="modal-image-container">
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
