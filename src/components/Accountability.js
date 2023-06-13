import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/accountability.c7d94f4b.svg'
const Accountability = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" className='w-[100vw] px-[1.5rem] md:px-[2rem] lg:px-[10%] py-[5rem] bg-slate-700'>
            <div className='border-2 border-slate-700 border-b-blue-500 pb-10 px-3 md:flex justify-between'>
                <h1 className='text-[30px] md:w-[50%] text-slate-400 font-mono font-bold'>Be accountable for your Co2 footprint</h1>
                <p className='font-mono md:w-[45%] md:mt-0 leading-6 mt-4 text-white'>Through powerful planning tools, our platform nudges all participating handlers towards more efficient planning, lowering costs for everyone involved</p>
            </div>
            <div className='mt-[2.5rem] md:flex justify-between'>
                <div className='rounded-md overflow-hidden md:w-[50%]'>
                    <img src={img} alt="image" className='' />
                </div>
                <div className='mt-[3rem] md:w-[45%] md:mt-0'>
                    <h1 className='text-[30px] font-mono font-bold text-slate-300'>Insight into all shipping details</h1>
                    <p className='font-mono leading-6 mt-4 text-white'>Keana will provide data which helps the customer to report on CSR goals like CO2 emission. This is relevant information for your customers, shareholders and in sales processes.</p>
                    <p className='font-mono leading-6 mt-4 text-white'>Through the suggestions for combining shipments in a bundled logistic flow Keana will actually save transport mileage in delivering the goods.


                    </p>
                </div>


            </div>
        </div>
    )
}

export default Accountability