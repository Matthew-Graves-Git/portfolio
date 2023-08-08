import sorting from '../assets/sorting.png';
const Card = (props) => {
    return (    
        <div class={`slot w-auto py-3 md:px-13 px-3 slot-12 top-0 slot-active left-[${468*props.offset}px]`} data-library-index="12">
                                <div class="w-128 md:w-128 max-w-lg p-4 bg-alternatives-gradient rounded-xl border border-alternatives-border alternatives-shadow">
                                    <div class="flex flex-wrap items-center justify-between mb-4">
                                        <div class="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
                                            <div class="flex items-center justify-center h-10 w-10 mr-2 bg-alternatives-darker border border-alternatives-border rounded">
                                                <img class="library-icon h-4" alt="" src="https://static.shuffle.dev/files/1676653226/dashy-icon.svg"/>
                                            </div>
                                            <h3 class="library-name text-white text-base font-semibold mr-2">Resourcify</h3>
                                            <div class="alert-no-components relative">
                                                <div class="hidden alert-message z-50 absolute top-0 w-80 max-w-xs px-4 py-2 -mt-20 -ml-7 text-sm text-alternatives-box-light bg-alternatives-secondary-dark-dark rounded-xl border border-alternatives-border alternatives-shadow">
                                                    <div class="absolute w-3 h-3 ml-8 -mb-2 border border-alternatives-border transform rotate-45 bottom-0 left-0 bg-alternatives-secondary-dark-dark"></div>
                                                    <div class="z-50 absolute w-5 h-2 ml-8 bottom-0 left-0 bg-alternatives-secondary-dark-dark"></div>
                                                    Sorry, this library doesn't have <span class="alert-category text-red-500"></span> components.
                                                </div>
                                                <img src="/vendor/shuffle/img/alternatives/alert.svg" alt=""/>
                                            </div>
                                        </div>
                                                                                <button data-action="click-slot" data-label="zip" class="show-modal-purchase shuffle-click flex items-center justify-center px-3 py-3 w-full sm:w-auto bg-alternatives-secondary-dark-light hover:bg-alternatives-secondary-dark text-white text-sm leading-none font-semibold border border-alternatives-border rounded focus:outline-none">
                                            <svg class="mr-1 text-alternatives-box-light" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3346 6.00016V4.66683C11.3346 2.80016 9.86797 1.3335 8.0013 1.3335C6.13464 1.3335 4.66797 2.80016 4.66797 4.66683V6.00016C3.53464 6.00016 2.66797 6.86683 2.66797 8.00016V12.6668C2.66797 13.8002 3.53464 14.6668 4.66797 14.6668H11.3346C12.468 14.6668 13.3346 13.8002 13.3346 12.6668V8.00016C13.3346 6.86683 12.468 6.00016 11.3346 6.00016ZM6.0013 4.66683C6.0013 3.5335 6.86797 2.66683 8.0013 2.66683C9.13464 2.66683 10.0013 3.5335 10.0013 4.66683V6.00016H6.0013V4.66683Z" fill="currentColor"></path>
                                            </svg>
                                            Download ZIP
                                        </button>
                                                                            </div>
                                    <div class="scrollbars flex rounded overflow-y-auto bg-alternatives-box-darker slot-12-img">
                                        <img className='h-[300px]' src={sorting} alt="" />
                                    </div>
                                    <div class="slot-actions mt-4 flex flex-wrap -mx-2">
                                        <div class="w-full md:w-1/2 mb-2 md:mb-0 px-2">
                                            <form action="/alternatives/preview" class="preview-form slot-form" method="post" target="_blank" rel="noopener">
                                                <div class="inner hidden"></div>
                                                <button type="submit" class="w-full flex items-center justify-center px-3 py-2 bg-alternatives-secondary-dark-light hover:bg-alternatives-secondary-dark text-white text-sm font-semibold border border-alternatives-border rounded focus:outline-none">
                                                    View Code
                                                </button>
                                            </form>
                                        </div>
                                        <div class="w-full md:w-1/2 px-2">
                                            <form action="/alternatives/project" class="edit-form slot-form" method="post" target="_blank" rel="noopener">
                                                <div class="inner hidden"></div>
                                                <button class="w-full flex items-center justify-center px-3 py-2 bg-brand-blue hover:bg-blue-700 text-white text-sm font-semibold border border-alternatives-border rounded focus:outline-none">
                                                    View Demo
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );

   
}



export default Card;
