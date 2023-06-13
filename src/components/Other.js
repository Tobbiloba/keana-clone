import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Other = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='w-[100vw] bg-slate-500 lg:justify-center lg:items-center z-30 lg:flex flex-row lg:h-[450px] md:flex md:justify-end md:h-[35rem]'>
            {/* <div className='hidden lg:flex  w-[45%] overflow-hidden'>

            </div> */}
            {/* <div className='border absolute'>
                <img src={img} className='absolute' />
            </div> */}
            <div className='absolute left-0 overflow-hidden w-[60vw] md:w-[40vw] hidden lg:hidden md:flex md:h-[35rem]'>
                <img src="https://keana.io/assets/vector-nodes-green.937a46d6.svg" alt="image" className='max-w-none relative md:w-[75rem]' />
            </div>
            <div className=' px-[2rem] lg:h-fit z-10 lg:text-center md:bg-slate-500 pt-[2.5rem] bg-transparent md:w-[70%] md:h-[35rem] lg:w-[50%] h-fit ' data-aos="fade-right">
                <h1 className='text-slate-700  text-4xl font-bold font-mono lg:hidden'>More handlers,<br />more problem</h1>
                <h1 className='hidden lg:flex justify-center text-slate-700 text-4xl font-bold font-mono'>More handlers, more problem</h1>
                <p className='mt-6 text-[18px] lg:text-[15px] leading-8 text-slate-300 '>
                    The logistics industry is rapidly advancing towards a future with fewer heavy trucks on the streets, resulting in reduced pollution and safer cities. Central to this progress is the emergence of distribution hubs. While distribution hubs offer a brilliant solution, they also introduce the challenge of multiple handlers utilizing various logistics software within the decentralized distribution chain, potentially causing congestion in the existing system.
                </p>
            </div>
            <div className='flex lg:hidden mt-4 md:hidden w-[100vw]' data-aos="fade-up" data-aos-delay="200">

                <img src="https://keana.io/assets/vector-nodes-green-mobile.8661594c.svg" alt="image" className='flex  lg:hidden w-[100vw]' />
            </div>
        </div>
    )
}

export default Other