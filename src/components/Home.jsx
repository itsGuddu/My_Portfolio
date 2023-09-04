import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
    
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-semibold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Divyajyoti Singhdeo</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] font-semibold'>I'm a Front-End Web Developer specializing in building front end 
          web-pages using React JS. Currently, I'm a Final Year Undergrad 
          Student at ITER SOA University.</p>
        <div>
        <button className='hover:scale-110 duration-300 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           <a href='https://drive.google.com/file/d/1MIlX2N1flLxztUR_5QoX1z9c-bGG-iId/view?usp=sharing' target='blank'>View Resume</a>
            <span>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
