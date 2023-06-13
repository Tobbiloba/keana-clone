import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/Menu'
import background from '../assets/homepagebackground.webp';
import stripe from '../assets/bg-vector.fabacc8e.svg'
import img from '../assets/phone-on-bicycle-for-mobile.eddb4bfb.webp'
const Homepage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className=' bg-slate-500 w-[100vw] lg:h-[70vh]  md:h-[800px] h-[100vh] overflow-y-hidden' >
            <div className='left-0 z-30 fixed  w-[100vw]'>
                <Menu />
            </div>

            <div className='flex  md:h-[800px] justify-between  flex-col md:flex-row overflow-hidden bg-slate-800  lg:h-[70vh] h-[100%]  '>
                <div data-aos="fade-right" className='h-[50%] md:h-[100%] lg:pl-[15%]   mt-[80px] lg:h-[100%]  md:w-[50%]  px-[2rem] md:px-[2rem] flex flex-col justify-center'>
                    <h1 className='text-3xl font-mono font-bold lg:text-5xl text-slate-700'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 w-fit px-10 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div>
                <div className='md:hidden lg:hidden' data-aos="fade-up">
                    <img src={img} alt='img' className='' />
                </div>

                <div className='overflow-hidden hidden lg:flex md:flex z-10' data-aos="fade-left">


                    <div className='w-[100%] lg:mr-[6rem] hidden pl-6 z-10 h-[100%] md:flex lg:flex justify-center items-center '>
                        <img src={background} alt='homepage background image' className='w-[70%] md:w-[85%] lg:w-[70%]' />
                    </div>

                </div>

                <div className='absolute hidden md:h-[800px] md:flex overflow-hidden z-[0] right-0 lg:h-[70vh]' data-aos="fade-left">
                    <img src={stripe} alt="stripe" className=' relative  left-[12.5rem] lg:left-0 bottom-[5rem] max-w-none w-[40rem] lg:w-[50rem] top-[3rem]' />
                </div>

            </div>
        </div>
    )
}

export default Homepage