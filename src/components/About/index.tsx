import React from 'react';
import Image from 'next/image';
import aboutImg from 'public/static/images/about.jpg';

function About() {
  return (
    <div className='about component__space'>
      <div className=''>
        <div className='flex'>
          <div className='flex-1 flex justify-center'>
          <Image src={aboutImg} alt='About me' />
          </div>
          <div className='flex-1'>
            <h1 className='text-6xl font-bold text-[#ff0000]'>About Me</h1>
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
