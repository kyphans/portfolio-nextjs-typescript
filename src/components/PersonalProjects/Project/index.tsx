import React, { useState } from 'react';

function Project() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className='project relative aspect-square rounded-lg bg-black'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='p-5'>{'Project'}</div>
      {isHovered && (
        <>
          <div className='mask flex justify-center items-center absolute top-0 right-0 rounded-lg w-full h-full transition-all duration-300 ease transform opacity-70 bg-gradient-to-r from-red-600 to-pink-500' />
          <div className='button flex justify-center items-center absolute top-0 right-0 w-full h-full'>
            <button className='opacity-100 p-2 w-1/2 md:w-[35%] bg-transparent text-white rounded-md border hover:bg-[#f9004d] hover:border-[#f9004d] transition-all duration-300 ease'>
              <span className=''>View Details</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
