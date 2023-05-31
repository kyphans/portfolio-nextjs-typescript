import React from 'react';
import Image from 'next/image';
import aboutImg from 'public/static/images/about.jpg';

function About() {
  return (
    <div className='about component__space'>
      <div className=''>
        <div className='about-wrapper w-[85%] md:w-[70%] mx-auto flex flex-col md:flex-row justify-center items-start'>
          <div className='image p-5 md:w-1/2 flex justify-center'>
            <Image src={aboutImg} alt='About me' />
          </div>
          <div className='description p-5 md:w-1/2'>
            <h1 className='text-6xl font-bold text-white'>About Me</h1>
            <div className='about__meta'>
              <p className='about__text p__color'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className='about__text p__color'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className='about__text p__color'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              <div className='about__button d__flex align__items__center'>
                <a href='#'>
                  <button className='about btn pointer'>Download Cv</button>
                </a>
                <a href='#'>
                  <button className='about btn pointer'>Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
