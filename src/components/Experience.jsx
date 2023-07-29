import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImg from '../assets/react.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import spring from '../assets/spring-boot.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';

const Experience = () => {
    const techs = [
        {
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            src:reactImg,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            src:node,
            title:'Node Js',
            style:'shadow-lime-400'
        },
        {
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            src:spring,
            title:'Spring',
            style:'shadow-lime-500'
        },
        {
            src:java,
            title:'Java',
            style:'shadow-blue-900'
        },
        {
            src:mongo,
            title:'MongoDB',
            style:'shadow-purple-500'
        },  
    ]


    return (  
        <div name='experience' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen pt-10'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>
                        Technologies I've mastered.
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({src,title,style},index)=>{
                    return(
                    <div
                     key={index}
                     className={`fade-left shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                    </div>
                    )})}
                </div>
            </div>
        </div>
    );
}
 
export default Experience;