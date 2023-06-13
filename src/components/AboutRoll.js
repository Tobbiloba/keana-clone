import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/map-vec.d1a30dc3.svg';
import Menu from './Menu';
const AboutRoll = () => {
    const containerStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Add other background properties as needed */
    };

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='bg-slate-700 w-[100vw] px-[1.5rem] md:px-[10%] flex items-center overflow-hidden h-[100vh]' >

            <div className='absolute max-w-[100vw] z-0 w-[100vw]  h-[100vh] top-0 boder left-0' style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'auto 130%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top -200px',
            }}>
            </div>
            <div className='z-20'>
                <h1 data-aos="fade-right" className='text-8xl lg:w-fit md:w-[25rem] text-slate-200  font-black'>Let it roll</h1>
                <p data-aos="fade-right" data-aos-delay="100" className='mt-[2rem] text-white font-mono md:w-[20rem] lg:w-fit'>Let's unclog the new decentralised distribution chain.</p>
            </div>
        </div>
    )
}

export default AboutRoll