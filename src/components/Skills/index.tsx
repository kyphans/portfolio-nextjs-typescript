import React from 'react';
import Skill from './Skill';

function Skills() {
  return (
    <div className='skills mx-10'>
      <div className='mb-10'>
        <p className='text-center text-6xl font-bold text-white'>
          My Awesome Skills
        </p>
        <p className='text-center text-xl text-gray-400 py-3'>
          Descriptions about my skills
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}

export default Skills;
