import sorting from '../assets/sorting.png';
import resourcify from '../assets/resourcify1.png';
import portfolioImage from '../assets/portfolio.png';


const Portfolio = () => {
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
            <div className='md:w-full w-[95%] h-full grid grid-cols-1 justify-center items-center align-middle md:grid-cols-2 gap-6 py-6 px-12 sm:px-0'>
              <img className='border-cyan-500 border-2'src={resourcify} alt="" />
              <img className='border-gray-500 border-2' src={sorting} alt="" />
              <img  className='border-gray-500 border-2' src={portfolioImage} alt="" />
                    {/* {techs.map(({src,title,style},index)=>{
                    return(
                    <div
                     key={index}
                     className={`fade-left shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                    </div>
                    )})} */}
            </div>
    
          </div>
        </div>
      );
}
 
export default Portfolio;