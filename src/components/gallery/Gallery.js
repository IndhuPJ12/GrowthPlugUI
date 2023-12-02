import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 5) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="gallery-container">
      <div className="gallery-title">Gallery</div>
      {images.slice(startIndex, startIndex + 5).map((image, index) => (
        <img key={index} src={image} alt="gallery" className="gallery-image" />
      ))}
    </div>
  );
};
export default Gallery;
