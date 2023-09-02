import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                        </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Divyajyoti, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I believe that the fusion of creativity, innovation, and technology 
                        can bring about positive change, and I'm committed to being a part 
                        of that change. Thank you for visiting my portfolio. 
                        Let's collaboratively create, innovate, and collectively make the 
                        digital world a better place together.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About