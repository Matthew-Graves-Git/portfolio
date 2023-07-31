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
    
            <p className="fade-left text-xl mt-20">
            My name is Matthew Graves, I am a full stack software developer, and am currently
            finishing my degree in computer science at Oakland University. 
            Throughout the past few years, I have been dedicated to learning 
            and mastering various web technologies. This plethora of experience will allow
             me to provide value to any company.
            </p>
    
            <br />
    
            <p className="fade-left text-xl">
            I pride myself in my attention to detail and focus on creating clean, stable and efficient
             software solutions with a focus on responsive design, accessibility, and performance.
            </p>
          </div>
        </div>
      );
}
 
export default Portfolio;