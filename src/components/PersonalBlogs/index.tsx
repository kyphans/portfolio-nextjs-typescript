import React from 'react';
import Blog from './Blog';

function PersonalBlogs() {
  return (
    <div className='blogs mx-10'>
      <div className='mb-10'>
        <p className='text-center text-3xl md:6xl font-bold text-white'>
          My Latest Blogs
        </p>
        <p className='text-center text-xl text-gray-400 py-3'>
          Descriptions about My Latest Blogs
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default PersonalBlogs;
