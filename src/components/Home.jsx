import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-scroll";
import { useInView } from '../hooks/useInView';


const Home = () => {
    const ref = useInView('.fade-left','animate-fade');
    return (  
        <div ref={ref} name="Home" className='h-[95vh] w-screen bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col 
            items-center justify-center h-full px-4 text-white md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='animate-fade text-4xl sm:text-7xl font-bold'>
                        Hello, I'm Matthew Graves
                    </h2>
                    <p className='fade-left animate-text text-xl font-semibold sm:text-4xl text-cyan-500 py-4 max-w-md'>
                        Full Stack Developer
                    </p>
                    <p className='fade-left text-gray-500 py-4 max-w-md'>
                        I have spent the past 3 years building and designing software solutions.
                        I specialize in web applications technologies: React, Tailwind, Node Js, and SpringBoot
                    </p>
                    <div>
                        <Link
                        to='Portfolio'
                        smooth
                        duration={500} 
                        className='group fade-left w-fit px-6 py-3 my-3 
                        flex items-center rounded-md 
                        bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer'>
                            Portfolio 
                            <span className='ml-1 group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25}/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;