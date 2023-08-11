import React from 'react';
import { Link } from "react-scroll";
import{FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";
import {MdOutlineKeyboardDoubleArrowUp} from 'react-icons/md';
import { useInView } from '../hooks/useInView';

const Footer = () => {
    const ref = useInView('.fade-left','animate-fade');
    const socials = [
        {
            child:(
            <FaLinkedin size={30}/>
            ),
            href:'https://www.linkedin.com/in/matthew-graves-29a3b0285',
        },
        {
            child:(
            <FaGithub size={30}/>
            ),
            href:'https://github.com/Matthew-Graves-Git',
        },
        {
            child:(
            <HiOutlineMail size={30}/>
            ),
            href:'mailto:matthew.graves.cs@gmail.com',
        },
        {
            child:(
            <BsFillPersonLinesFill size={30}/>
            ),
            href:'/Matthew-Graves-Resume.pdf',
            download:true
        },
    ]

    return (
    <div ref={ref} className="h-full w-screen flex-col justify-center items-center bg-gray-800 text-white">
            <div className='flex h-10 justify-center items-center bg-black'>
            <Link to={'Home'} smooth duration={500} className='w-10'>
                <MdOutlineKeyboardDoubleArrowUp className=' bg-cyan-800 absolute hover:scale-105 duration-200 ' size={40}/>
            </Link>
            </div>
            <ul className='flex h-full w-screen justify-evenly items-center bg-gray-800 text-white'>
                { socials.map(({child,href,download},index)=>{
                    return(
                    <li
                    key={index} 
                    className={`
                  h-16 px-4 mt-4 flex fade-left justify-between items-center bg-black rounded-full hover:scale-105 duration-200 `}>
                        <a href={href}
                        className='text-white'
                        download={download}
                        target='_blank'
                        rel='noreferrer'
                        >
                            {child}    
                        </a>
                    </li>
                )})}
            </ul>
            <p className='text-sm mt-2 justify-center items-center flex'> © 2023 Matthew Graves</p>
    </div>
    );
}
 
export default Footer;