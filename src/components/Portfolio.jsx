import sorting from '../assets/sorting.png';
import resourcify from '../assets/resourcify1.png';
import portfolioImage from '../assets/portfolio.png';
import Card from './Card';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';


const Portfolio = () => {
  const projects = [
    {
      src:portfolioImage,
      title:"Portfolio",
      border: "border-cyan-800"
    },
    {
      src:resourcify,
      title:"Resourcify",
      border: "border-red-800"
    },
    {
      src:sorting,
      title:"Sorting Visualizer",
      border: "border-cyan-800"
    },
]
    return (
        <div
          name="Portfolio"
          className="w-screen h-full bg-gradient-to-b to-gray-800 from-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
              </p>
            </div>
            <div className='flex h-full w-full justify-center items-center'>
            {/* {projects.map(({src,title,border},index)=>{
              return(
                <img key={index} className={`rounded-md ${border} fade-left border-r-2 border-b-2`} src={src} alt={title} />
              );
            })} */}
            <Card offset={0}/>
            <button class=" z-10 absolute right-[10%] -mt-8 mr-4 flex items-center justify-center px-8 h-12 bg-alternatives-secondary-dark-dark hover:bg-alternatives-secondary-dark border border-alternatives-border rounded focus:outline-none">
                        <MdKeyboardArrowRight size={30}/>
            </button>
            <button class="carousel-prev z-10 absolute left-[10%] -mt-8 ml-4 flex items-center justify-center px-8 h-12 bg-alternatives-secondary-dark-dark hover:bg-alternatives-secondary-dark border border-alternatives-border rounded focus:outline-none">
                <MdKeyboardArrowLeft size={30}/>
            </button>
            </div>
          </div>
        </div>
      );
}
 
export default Portfolio;