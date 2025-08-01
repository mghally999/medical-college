"use client";

import React from "react";

interface ModalVideoProps {
  videoId?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  src?: string;
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
};

const modalStyle: React.CSSProperties = {
  position: "relative",
  width: "90%",
  maxWidth: "900px",
  backgroundColor: "transparent",
  borderRadius: "8px",
  padding: "20px",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "-40px",
  right: "0",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  background: "transparent",
  border: "none",
  outline: "none",
};

const responsiveIframeContainerStyle: React.CSSProperties = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
};

const iframeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: "8px",
};

const ModalVideo: React.FC<ModalVideoProps> = ({
  videoId,
  isOpen,
  setIsOpen,
  src,
}) => {
  const closeModal = () => setIsOpen(false);

  return (
    <div
      style={{
        ...overlayStyle,
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      onClick={closeModal}
    >
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} style={closeButtonStyle}>
          ×
        </button>
        <div style={responsiveIframeContainerStyle}>
          {isOpen && (
            <iframe
              src={
                src
                  ? src
                  : `https://www.youtube.com/embed/${videoId}?autoplay=1`
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
