import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/sumanthvemula122004281/',
            style:'rounded-tl-md'
        },
        {
            id:2,
            child:(
                <>
                <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/vemulasumanth',
        },
        {
            id:3,
            child:(
                <>
                <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:vemulasumanth140500@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'https://drive.google.com/file/d/1-QNerHOUlyAkO6VCpE7TkBwRUTBYYjPr/view?usp=sharing',
            style:'rounded-tr-md',
            download: true
        }
    ]
  return (
    <div className="flex flex-row justify-center items-center fixed bottom-0 left-0 w-full bg-gray-700  ">
    <ul className="flex gap-0 md:hover:gap-x-4 transition-all duration-300" >
      {links.map(({id, child, href, style, download}) => (
        <li key={id} className={`flex justify-between items-center w-20 h-14 px-4 bg-gray-700 ${style}`}>
          <a 
            href={href} 
            className="flex justify-center items-center w-full text-white" 
            download={download}
            target='_blank'
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  </div>
  

  );
};

export default SocialLinks;
