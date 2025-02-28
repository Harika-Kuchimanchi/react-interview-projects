import React, { useState } from 'react';

const images = [
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
  'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
  'https://images.pexels.com/photos/15286/pexels-photo.jpg',
  'https://images.pexels.com/photos/34950/pexels-photo.jpg',
  'https://images.pexels.com/photos/20787/pexels-photo.jpg',
  'https://picsum.photos/seed/pic1/400/300',
  'https://picsum.photos/seed/pic2/400/300',
  'https://picsum.photos/seed/pic3/400/300',
  'https://picsum.photos/seed/pic4/400/300',
  'https://picsum.photos/seed/pic5/400/300',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <h1>Manual/Dotted Carousel</h1>

      <button
        onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
        style={{
          position: 'absolute',
          left: '15%',
          top: '50%',
          background: 'white',
          border: '1px solid gray',
          borderRadius: '50%',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        disabled={current <= 0}
      >
        &lt;
      </button>

      <img src={images[current]} width="200px" height="150px" alt="carousel" />

      <button
        onClick={() =>
          setCurrent((prev) => Math.min(prev + 1, images.length - 1))
        }
        style={{
          position: 'absolute',
          right: '15%',
          top: '50%',
          background: 'white',
          border: '1px solid gray',
          borderRadius: '50%',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        disabled={current >= images.length - 1}
      >
        &gt;
      </button>

      {/* Dots Navigation */}
      <div style={{ marginTop: '10px' }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              cursor: 'pointer',
              padding: '1px',
              margin: '3px',
              borderRadius: '50%',
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: current === index ? 'black' : 'gray',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
