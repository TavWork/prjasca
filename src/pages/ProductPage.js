import React, { useState, useEffect } from "react";
import pillow1 from "../assets/cnpill1.jpg";
import pillow2 from "../assets/cnpill2.jpg";
import pillow3 from "../assets/cnpill3.jpg";
import pillow4 from "../assets/cnpill4.jpg";
import "../App.css";

function ProductPage() {
  const images = [pillow1, pillow2, pillow3, pillow4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="product-page">
      <div className="product-main">
        {/* ===== Image Slider Left ===== */}
        <div className="slider-container">
          <img
            src={images[currentIndex]}
            alt={`Car Neck Pillow ${currentIndex + 1}`}
            className="slider-image"
            onClick={() => openLightbox(images[currentIndex])}
          />
        </div>

        {/* ===== Product Details Right ===== */}
        <div className="details-container">
          <h2>Premium Memory Foam Neck Pillow</h2>
          <p className="description">
            Experience unmatched comfort during long drives with our ergonomic memory foam neck pillow.
            Designed to reduce neck strain and provide perfect head support for a relaxing journey.
          </p>

          <ul className="features">
            <li>✔️ Ergonomic design for maximum comfort</li>
            <li>✔️ Breathable, washable fabric cover</li>
            <li>✔️ Adjustable strap fits all car seats</li>
            <li>✔️ Available in multiple colors</li>
          </ul>

          <p className="price">$24.99</p>
        </div>
      </div>

      {/* ===== Gallery Section ===== */}
      <section className="gallery-section">
        <h2>More Images</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(src)}>
              <img src={src} alt={`Car Neck Pillow ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Lightbox Overlay ===== */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeLightbox}>&times;</span>
            <img src={selectedImage} alt="Large view" />
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2025 Car Comfort Accessories | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default ProductPage;
