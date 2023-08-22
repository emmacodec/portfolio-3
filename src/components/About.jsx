import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#696969] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                    </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Emmanuel, i'm so excited to meet you. Feel free to take a glimpse..!!</p>
                </div>
                <div className='text-2xl font=bold'>
                    <p>I'm keen about building excellent softwares that improves the lives of those
                        around me. I specialize in creating softwares for clients ranging from
                        individuals to small-businesses all the way to large enterprise or corporations.!
                        What would you do if you had a software expert available at your disposal?</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
