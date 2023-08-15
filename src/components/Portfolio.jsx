import React, { useState } from 'react';
import sorting from '../assets/sorting.png';
import resourcify from '../assets/resourcify1.png';
import portfolioImage from '../assets/portfolio.png';
import Card from './Card';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';


const Portfolio = () => {
  const [inset, setInset] = useState(1);
  const projects = [
    {
      src:portfolioImage,
      title:"Portfolio",
      border: "border-cyan-800",
      link:"#",
      code:"https://github.com/Matthew-Graves-Git/portfolio",
      download:'https://github.com/Matthew-Graves-Git/portfolio/archive/refs/heads/master.zip'
    },
    {
      src:sorting,
      title:"Sorting Visualizer",
      border: "border-cyan-800",
      code:"https://github.com/Matthew-Graves-Git/Sorting-Visualizer",
      download:'https://github.com/Matthew-Graves-Git/Sorting-Visualizer/archive/refs/heads/master.zip'
    },
    {
      src:resourcify,
      title:"Resourcify",
      border: "border-red-800",
      code:"https://github.com/Matthew-Graves-Git/ou_resource_manager",
      download:'https://github.com/Matthew-Graves-Git/ou_resource_manager/archive/refs/heads/master.zip'
    },
    
]

const carouselPos = (index) =>{
    if(inset === 0  && index === projects.length -1){ 
      console.log(index,-1)
      return -1;
    }
    if(inset === projects.length -1  && index === 0){ 
      return 1;
    }
    return index-inset;
}
    return (
        <div
          name="Portfolio"
          className="w-screen h-screen bg-gradient-to-b to-gray-800 from-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col overflow-hidden justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
            </div>
            <div className='flex h-full w-full justify-center items-center'>
            {projects.map((info,index)=>{
              return(
                <Card key={index} offset={carouselPos(index)} info={info}/>
              );
            })}
            <button onClick={()=>setInset((inset + 1) % projects.length)} className=" z-10 absolute right-0 lg:right-[10%] -mt-8 mr-4 flex items-center justify-center px-1 sm:px-8 h-12 bg-alternatives-secondary-dark-dark hover:bg-alternatives-secondary-dark border border-alternatives-border rounded focus:outline-none">
                <MdKeyboardArrowRight size={30}/>
            </button>
            <button onClick={()=>setInset((inset - 1) < 0 ? projects.length-1:(inset - 1)) } className="z-10 absolute left-0 lg:left-[10%] -mt-8 ml-4 flex items-center justify-center px-1 sm:px-8 h-12 bg-alternatives-secondary-dark-dark hover:bg-alternatives-secondary-dark border border-alternatives-border rounded focus:outline-none">
                <MdKeyboardArrowLeft size={30}/>
            </button>
            </div>
          </div>
        </div>
      );
}
 
export default Portfolio;