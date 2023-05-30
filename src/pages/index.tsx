import About from '@/components/About';
import Introduce from '@/components/Introduce';
import NavBar from '@/components/NavBar';
import PersonalBlogs from '@/components/PersonalBlogs';
import PersonalProjects from '@/components/PersonalProjects';
import Skills from '@/components/Skills';

export default function HomePage() {
  return (
    <main className={`text-white`}>
      <div className='z-[999] fixed top-0 right-0 w-full'>
        <NavBar/>
      </div>
      <div className='h-screen pt-36' id='Home'>
        <div className='home__bg'>
          <div className='w-11/12 mx-auto'>
            <Introduce />
          </div>
        </div>
      </div>
      <div className='md:h-screen py-32 bg-[#191919]' id='About'>
        <About />
      </div>
      <div className='md:h-screen py-32 bg-black' id='Skills'>
        <Skills />
      </div>
      <div className='md:h-screen py-32 bg-[#191919]' id='Personal-Projects'>
        <PersonalProjects />
      </div>
      <div className='md:h-screen py-32 bg-black' id='Personal-Blogs'>
        <PersonalBlogs />
      </div>
    </main>
  );
}
