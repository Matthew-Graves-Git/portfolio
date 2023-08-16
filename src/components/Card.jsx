const Card = (props) => {
    return (    
<div className={`slot w-auto py-3 md:px-13 px-3 absolute ${props.offset > 1 || props.offset < -1  ? 'hidden':''} ${props.offset === 0 ? 'z-[1]':'opacity-20'}  ${props.offset === 1 ? `hidden xl:-translate-x-[25vw] lg:flex  2xl:-translate-x-[95%] scale-75`:``} ${props.offset === -1 ? `hidden xl:translate-x-[25vw] lg:flex  2xl:translate-x-[95%] scale-75`:``} `} data-library-index="12">                                
                                <div className="w-128 md:w-128 max-w-lg p-4 bg-alternatives-gradient rounded-xl border border-alternatives-border alternatives-shadow">
                                    <div className="flex flex-wrap items-center justify-between mb-4">
                                        <div className="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
                                            <div className="flex items-center justify-center h-10 w-10 mr-2 bg-alternatives-darker border border-alternatives-border rounded">
                                                <img className="library-icon h-4" alt="" src="https://static.shuffle.dev/files/1676653226/dashy-icon.svg"/>
                                            </div>
                                            <h3 className=" text-white text-base font-semibold mr-2">{props.info.title}</h3>
                                            <div className="relative">
                                                <div className="hidden z-50 absolute top-0 w-80 max-w-xs px-4 py-2 -mt-20 -ml-7 text-sm text-alternatives-box-light bg-alternatives-secondary-dark-dark rounded-xl border border-alternatives-border alternatives-shadow">
                                                    <div className="absolute w-3 h-3 ml-8 -mb-2 border border-alternatives-border transform rotate-45 bottom-0 left-0 bg-alternatives-secondary-dark-dark"></div>
                                                    <div className="z-50 absolute w-5 h-2 ml-8 bottom-0 left-0 bg-alternatives-secondary-dark-dark"></div>
                                                    Sorry, this library doesn't have <span className=" text-red-500"></span> components.
                                                </div>
                                            </div>
                                        </div>
                                        <a 
                        href='/'
                        download={props.info.download}
                        target='_blank'
                        rel='noreferrer'
                        className="flex items-center justify-center px-3 py-3 w-full sm:w-auto bg-alternatives-secondary-dark-light hover:bg-alternatives-secondary-dark text-white text-sm leading-none font-semibold border border-alternatives-border rounded focus:outline-none">
                                            <svg className="mr-1 text-alternatives-box-light" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3346 6.00016V4.66683C11.3346 2.80016 9.86797 1.3335 8.0013 1.3335C6.13464 1.3335 4.66797 2.80016 4.66797 4.66683V6.00016C3.53464 6.00016 2.66797 6.86683 2.66797 8.00016V12.6668C2.66797 13.8002 3.53464 14.6668 4.66797 14.6668H11.3346C12.468 14.6668 13.3346 13.8002 13.3346 12.6668V8.00016C13.3346 6.86683 12.468 6.00016 11.3346 6.00016ZM6.0013 4.66683C6.0013 3.5335 6.86797 2.66683 8.0013 2.66683C9.13464 2.66683 10.0013 3.5335 10.0013 4.66683V6.00016H6.0013V4.66683Z" fill="currentColor"></path>
                                            </svg>
                                            Download ZIP
                                        </a>
                                                                            </div>
                                    <div className="flex rounded overflow-y-auto bg-alternatives-box-darker slot-12-img">
                                        <img className='h-[35vh] md:h-[40vh]' src={props.info.src} alt={props.info.title} />
                                    </div>
                                    <div className="mt-4 flex flex-wrap -mx-2">
                                        <div className="w-full md:w-1/2 mb-2 md:mb-0 px-2">
                                                <div className="inner hidden"></div>
                                                <a href={props.info.code} className="w-full flex items-center justify-center px-3 py-2 bg-alternatives-secondary-dark-light hover:bg-alternatives-secondary-dark text-white text-sm font-semibold border border-alternatives-border rounded focus:outline-none" target='_blank' rel='noreferrer'>
                                                    View Code
                                                </a>
                                        </div>
                                        <div className="w-full md:w-1/2 px-2">
                                                <div className="inner hidden"></div>
                                                {props.info.link && <a href={props.info.link} className="w-full flex items-center justify-center px-3 py-2 bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold border border-alternatives-border rounded focus:outline-none" target='_blank' rel='noreferrer'>
                                                    View Demo
                                                </a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
    );

   
}



export default Card;
