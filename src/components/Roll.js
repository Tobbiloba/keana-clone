import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Roll = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='py-[5rem] px-[1.5rem] flex flex-col md:items-center lg:items-center md:justify-between lg:justify-center lg:gap-[15%] md:px-[3rem] md:flex-row'>
            <h1 data-aos="fade-right" className='text-slate-700 text-[80px] leading-[1.3] font-bold font-mono'>Let it <br />roll</h1>
            <div className='mt-[3rem] md:w-[50%] lg:w-[30%]'>
                <p data-aos="fade-right" className='text-slate-500 text-[15px] md:leading-7 font-mono'>At Keana we believe that fuzzy algorithms, embracing a certain amount of uncertainty and freedom in human behaviour, always lead to the best logistics solutions. Keana does the maths, leaving creativity, intuition and experience to the people using our platform.

                </p>
                <button data-aos="fade-right" className='text-slate-800 border border-slate-800 py-2 px-6 mt-[2.2rem] rounded-3xl hover:bg-slate-800 hover:text-white cursor-pointer'>Read our manifesto</button>
            </div>
        </div>
    )
}

export default Roll