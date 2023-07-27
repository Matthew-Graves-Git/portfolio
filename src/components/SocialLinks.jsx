import React from 'react';
import{FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const socials = [
        {
            child:(
            <>
            LinkedIn
            <FaLinkedin size={30}/>
            </>
            ),
            href:'',
            style: 'rounded-tr-md'
        },
        {
            child:(
            <>
            Github
            <FaGithub size={30}/>
            </>
            ),
            href:'',
        },
        {
            child:(
            <>
            Mail
            <HiOutlineMail size={30}/>
            </>
            ),
            href:'mailto:matthew.graves.cs@gmail.com',
        },
        {
            child:(
            <>
            Resume
            <BsFillPersonLinesFill size={30}/>
            </>
            ),
            href:'/matthew-graves-resume.pdf',
            style: 'rounded-br-md',
            download:true
        },
    ]

    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                { socials.map(({key},index)=>{
                    <li className='flex justify-between items-center
                 w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500'>
                        <a href=""
                        className='flex justify-between items-center w-full text-white'
                        >    
                        </a>
                    </li>
                })
                
                }
            </ul>
        </div>
    );
}
 
export default SocialLinks;