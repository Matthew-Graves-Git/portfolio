import dev from '../assets/backgroundDev.png';
import { useInView } from "../hooks/useInView";

const About = (props) => {

// create custom hook, look into forward ref;

const ref = useInView('.fade-left','animate-fade');


  return (
    <div
      ref={ref}
      name="About"
      className="h-full lg:h-screen w-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          
        </div>
        <div className="grid grid-flow-col-dense items-center pb-10">
        <div>
        <p className="fade-left font-medium text-lg lg:text-xl mt-10">
        My name is Matthew Graves, I am a full stack software developer, and am currently
        finishing my degree in computer science at Oakland University. 
        Throughout the past few years, I have been dedicated to learning 
        and mastering various web technologies. This plethora of experience will allow
         me to provide value to any company.
        </p>

        <br />

        <p className="fade-left font-medium text-lg lg:text-xl">
        I pride myself in my attention to detail and focus on creating clean, stable and efficient
         software solutions with a focus on responsive design, accessibility, and performance.

        </p>
      </div>
      <img className="hidden fade-left lg:flex lg:h-full lg:w-full" src={dev} alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default About;