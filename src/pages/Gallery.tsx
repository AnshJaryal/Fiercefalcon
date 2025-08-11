import React, { useState } from 'react';

const images = [
  '/images/6.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/2.jpg',
  '/images/image2.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore moments from our sports society.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl mx-auto p-4">
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg shadow-lg" />
            <button className="absolute top-4 right-4 bg-white text-black p-2 rounded-full" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
