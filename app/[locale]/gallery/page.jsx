import React from 'react';
import '@styles/globals.css';


const GalleryPage = () => {
  const galleryData = [
    {
      title: 'Image 1',
      imageUrl: '/image1.jpg', // Replace with your image URL
    },
    {
      title: 'Image 2',
      imageUrl: '/image2.jpg', // Replace with your image URL
    },
    // Add more gallery items
  ];

  return (
    <div className='backgroundAll'>
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryData.map((item, index) => (
          <div key={index} className="p-2">
            <img src={item.imageUrl} alt={item.title} className="h-64 w-full object-cover rounded-md shadow" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GalleryPage;
