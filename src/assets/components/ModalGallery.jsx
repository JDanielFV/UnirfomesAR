import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }
`;

const ModalGallery = ({ open, onClose, images }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <CloseBtn onClick={onClose} aria-label="Cerrar galería">&times;</CloseBtn>
      <ModalContent role="dialog" aria-modal="true" aria-label="Galería de imágenes">
        <GalleryGrid>
          {images.map((img, idx) => (
            <GalleryImg src={img} alt={`Galería ${idx+1}`} key={idx} />
          ))}
        </GalleryGrid>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalGallery;
