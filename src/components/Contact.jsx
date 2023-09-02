import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/91db143b-82a5-4be0-bd57-fe38e43ebb35" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below</p>
            </div>    
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='Email' />
            <textarea className='bg-[#ccd6f6] p-2' name="Message" rows="10" placeholder='Message'/>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-2 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact