import React, { useEffect, useState } from 'react';
import './Banner.css';

const images = [
  'https://cdn.wallpapersafari.com/2/14/ZBqTi9.jpg',
  'https://thumbs.dreamstime.com/b/web-page-smart-phone-color-background-72577984.jpg',
  'https://png.pngtree.com/background/20230618/original/pngtree-modern-website-design-displayed-on-desktop-with-all-devices-in-3d-picture-image_3753137.jpg',
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      {images.map((img, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="banner-content">
        <h2>Discover the Best Deals Here</h2>
        <p>Explore trending fashion, electronics, and more — curated just for you.</p>
        <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
          Shop Now
        </button>
      </div>

      <div className="banner-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
