import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen  bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
        <div className='flex flex-col p-2 justify-center max-w-screen-lg mx-auto h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-1 text-gray-400'>Submit the details below to get in touch with me</p>
            </div>
            <div className=''>
          {/* Contact information */}
          <div className="flex items-center">
            <span className="mr-2">&#x260E;</span> {/* Phone icon */}
            <p className="text-gray-400">+91-9704673046</p> {/* Phone number */}
          </div>
          <div className="flex items-center">
            <span className="mr-2">&#x2709;</span> {/* Email icon */}
            <p className="text-gray-400">vemulasumanth140500.com</p> {/* Email */}
          </div>
        </div>
            <div className='flex justify-center items-center mt-0'>
                <form action="https://getform.io/f/ebpdygnb" method='POST' className='flex flex-col w-full md:w-1/2 p-0'>
                    <input required type='text' name='name' placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input required type='text' name='email' placeholder='Enter your email' 
                    className=' my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea required name="message" rows="10" placeholder='Enter your message' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className= ' mt-5 mb-20 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact