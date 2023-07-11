import React from 'react';

import aws from '../assets/aws.png';
import css from '../assets/css.png';
import firebase from '../assets/firebase.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mongoDB from '../assets/mongoDB.png';
import react from '../assets/react.png';
import realestate from '../assets/realestate.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>// These are all the technologies i've worked with..!!</p>
        </div>

        {/*container for all icons*/}

        <div className='w-full grid grid-cols-2 sm:grig-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={aws} alt='aws icon' />
            <p className='my-4'>AWS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt='css icon' />
            <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={firebase} alt='firebase icon' />
            <p className='my-4'>FIREBASE</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt='github icon' />
            <p className='my-4'>GITHUB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt='html icon' />
            <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt='javascript icon' />
            <p className='my-4'>JAVASCRIPT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongoDB} alt='mongoDB icon' />
            <p className='my-4'>MONGODB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt='react icon' />
            <p className='my-4'>REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={realestate} alt='realestate icon' />
            <p className='my-4'>REAL-ESTATE</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt='tailwind icon' />
            <p className='my-4'>TAILWIND</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
