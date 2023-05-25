import React from 'react';
function Introduce() {
  return (
    <div className='home__content pt-60'>
      <div className='home__meta'>
        <h1 className='my-3 text-sm md:text-xl text-gray-500'>
          WELCOME TO MY WORLD
        </h1>
        <div className='wrapper-text'>
          <h2 className='my-3 text-4xl md:text-5xl font-extrabold'>
            Hi, I’m Ky Phan.
          </h2>
        </div>
        <h3 className='my-3 text-4xl md:text-5xl font-extrabold text-[#f9004d]'>
          JS Developer.
        </h3>
        <h4 className='my-3 text-4xl md:text-5xl font-extrabold'>
          based in Viet Nam.
        </h4>
      </div>
    </div>
  );
}

export default Introduce;
