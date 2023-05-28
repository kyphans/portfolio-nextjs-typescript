import React from 'react';

function Project() {
  return (
    <div className='project relative aspect-square rounded-lg bg-[#1a1a1a]'>
      <div className='p-5'>{'Project'}</div>
      <div className='mask flex justify-center items-center absolute top-0 right-0 rounded-lg w-full h-full transition-all duration-300 ease hover:transform hover:opacity-70 hover:bg-gradient-to-r from-red-600 to-pink-500'>
        <button className=' w-[100px] bg-white text-black'>View Detail</button>
      </div>
    </div>
  );
}

export default Project;
