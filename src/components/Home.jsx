import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';


const Home = () => {
    return (  
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col 
            items-center justify-center h-full px-4 text-white md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className=' text-gray-500 py-4 max-w-md'>
                        I have spent the past 3 years building and designing software solutions.
                        I specialize in web applications technologies: React, Tailwind, Node Js and SpringBoot
                    </p>
                    <div>
                        <button className='group w-fit px-6 py-3 my-2 
                        flex items-center rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio 
                            <span className='ml-1 group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25}/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;