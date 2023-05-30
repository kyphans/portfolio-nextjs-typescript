import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from 'public/static/images/logo.png';

function NavBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navigation = document.querySelector('.navigation');
      navigation?.classList.toggle('bg-black', window.scrollY > 0);
      navigation?.classList.toggle('!p-3', window.scrollY > 0);

    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: any) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navigation flex items-center p-5 transition-all duration-300 ease'>
      <div className='logo'>
        <Image src={logo} alt='Logo' />
      </div>
      <div className='hidden md:block'>
        <ul className='navbar flex'>
          <li className='text-lg my-3 mx-5'>
            <a href='#Home' onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li className='text-lg my-3 mx-5'>
            <a href='#About' onClick={handleNavClick}>
              About
            </a>
          </li>
          <li className='text-lg my-3 mx-5'>
            <a href='#Skills' onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li className='text-lg my-3 mx-5'>
            <a href='#Personal-Projects' onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li className='text-lg my-3 mx-5'>
            <a href='#Personal-Blogs' onClick={handleNavClick}>
              Blogs
            </a>
          </li>
          <li className='text-lg my-3 mx-5'>
            <a href='#Contact' onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Toogle Menu */}
      <div className='md:hidden ml-auto z-50 '>
        <svg
          onClick={() => setShow(!show)}
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-justify white pointer'
          viewBox='0 0 16 16'>
          <path
            fillRule='evenodd'
            d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </div>
      {show ? (
        <div className='sideNavbar fixed top-0 right-0 h-full w-40 bg-black text-lg md:hidden'>
          <ul className='sidebar flex justify-center flex-col h-full'>
            <li className='m-5'>
              <a href='#Home' onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li className='m-5'>
              <a href='#About' onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className='m-5'>
              <a href='#Skills' onClick={handleNavClick}>
                Skills
              </a>
            </li>
            <li className='m-5'>
              <a href='#Personal-Projects' onClick={handleNavClick}>
                Projects
              </a>
            </li>
            <li className='m-5'>
              <a href='#Personal-Blogs' onClick={handleNavClick}>
                Blogs
              </a>
            </li>
            <li className='m-5'>
              <a href='#Contact' onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
