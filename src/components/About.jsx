import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20 text-gray-500'>
        I'm Vemula Sumanth, a passionate Software Engineer based in Bangalore, 
        specializing in Java back-end development. With a B.Tech in 
        Electronics and Communication Engineering from SASTRA University, 
        I have expertise in Java, Spring Boot, React.js, and Microservices.
         At Accenture, I developed a B2B web application and an inventory management system, 
         showcasing my skills in creating scalable and efficient solutions.
        </p>
      </div>
    </div>
  )
}

export default About