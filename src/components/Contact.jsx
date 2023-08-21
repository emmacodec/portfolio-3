import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e2a9bd99-3555-4d33-a1bf-91b4c7ee0649" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacts</p>
                <p className='text-gray-300 p-4'>Submit the form or send me a DM danielemmanuel7553@gmail.com or ojochideteidi@gmail.com or danielemmanuel111@yahoo.com</p>
            </div>

            <input type='text' placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
            <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name='message' placeholder='Message' rows={10} className='bg-[#ccd6f6] p-2'></textarea>
            <button className='text-white font-bold border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  );
};

export default Contact;
