import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-800 py-4'>
      <div className='flex justify-center'>
        {/* Add your social media icons or links here */}
      </div>
      <p className='text-white text-center'>
        &copy; {new Date().getFullYear()} PT. Dafico Prima Perkasa
      </p>
    </div>
  );
}

export default Footer;
