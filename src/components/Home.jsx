import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-60 lg:pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl  font-bold text-white'>
                Back-end Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Software Engineer having experience of 1 year in Java back-end development and well acquainted with agile methodologies.
                    Proficient in multiple programming languages and well-versed in utilizing various development tools and frameworks.
                </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                    </Link>
                </div>
            </div>
            <div>
                <img className='rounded-circle mx-auto w-2/3 md:w-full' src="https://i.ibb.co/tbW1GtX/Whats-App-Image-2024-01-25-at-11-27-04-modified.png" alt="my profile" />
            </div>
        </div>
    </div>
  )
}

export default Home