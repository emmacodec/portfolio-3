import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='font-bold text-orange-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Emmanuel</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front end developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] font-bold text-2xl'>I'm a proficient front end developer specializing in designing exceptional digital experience (web applications). </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>Take a tour to my work
            <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 hover:' />
             </span>
             </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
