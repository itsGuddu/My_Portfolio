import React from 'react';

const Education = () => {
  return (
    <div name='education' className='flex flex-col justify-center items-center h-screen  bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Education</p>
              </div>

    <div className='py-8'>
      <ol className="relative border-l border-gray-300">                  
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2009-2018</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ST FRANCIS DE SALES SCHOOL, SERAIKELLA</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">SECONDARY</p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">2018-2020</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GAYATRI SHIKSHA NIKETAN, ADITYAPUR</h3>
          <p className="text-base font-normal text-gray-300 dark:text-gray-400">HIGHER SECONDARY</p>
          </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">2020-PRESENT</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">INSTITUTE OF TECHNICAL EDUCATION & RESEARCH SOA UNIVERSITY, BHUBANESWAR</h3>
          <p className="text-base font-normal text-gray-300 dark:text-gray-400">B.TECH IN COMPUTER SCIENCE AND ENGINEERING</p>
      </li>
      </ol>
      </div>
      </div>
    </div>
  );
}

export default Education;
