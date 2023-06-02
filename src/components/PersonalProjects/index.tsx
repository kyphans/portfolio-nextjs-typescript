import React from 'react';
import Project from './Project';

function PersonalProjects() {
  return (
    <div className='projects mx-10'>
      <div className='mb-10'>
        <p className='text-center text-3xl md:6xl font-bold text-white'>
          My Latest Project
        </p>
        <p className='text-center text-xl text-gray-400 py-3'>
          Descriptions about My Latest Project
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default PersonalProjects;
