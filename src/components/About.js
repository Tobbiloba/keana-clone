import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import people from '../assets/colleagues-holding-device-large.d5a93fe3.webp';
import bicycle from '../assets/electric-bicycle.8798acaa.webp';
import laptop from '../assets/dashboard-on-screen.ca665204.webp'
const About = () => {
    const object = [
        {
            id: 1,
            img: people,
            h1: 'Insight into your distribution chain',
            p: 'Keana connects all possible software systems, resulting in a single, simple overview of the new decentralised distribution chain.',
            flex: 'left'
        },
        {
            id: 2,
            img: laptop,
            h1: 'Improve efficiency, lower costs.',
            p: 'Keana connects all possible software systems, resulting in a single, simple overview of the new decentralised distribution chain.',
            flex: 'right'
        },
        {
            id: 3,
            img: bicycle,
            h1: 'Be accountable for your Co2 footprint',
            p: "Find and select smart mobility vehicles, reducing your overall carbon emissions. And get instant insight into the CO2 reduction you've achieved.",
            flex: 'left'
        },


    ]

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='bg-white py-[4rem] w-[100vw] px-[2rem] lg:px-[25%] md:px-[10%]'>
            <h1 className=' text-slate-500 lg:text-center font-mono text-3xl font-bold'>
                Keana is the solution: manage your shipments through all handlers.
            </h1>
            <div className='md:mt-[5rem] lg:mt-[3rem] flex flex-col'>
                {
                    object.map((item) => {
                        return (
                            <div key={item.id} data-aos="fade-up" className={`flex md:justify-between mt-[6rem] flex-col justify-center items-center ${item.flex === 'right' ? 'lg:flex-row md:flex-row' : 'lg:flex-row-reverse md:flex-row-reverse'}`}>
                                <div className='w-[18rem] h-[18rem] rounded-full overflow-hidden'>
                                    <img src={item.img} alt='image' className='w-[100%] h-3s120%] rounded-full' />
                                </div>
                                <div className='mt-[4rem] md:w-[40%] lg:w-[50%]'>
                                    <h1 className='text-purple-400 text-2xl font-mono  font-bold'>{item.h1}</h1>
                                    <p className='mt-[1.2rem] font-mono text-[15px]'>{item.p}</p>
                                    <button className='mt-[2rem] border px-5 font-semibold py-3 text-purple-400 font-mono  rounded-3xl hover:bg-purple-400 hover:text-white'>Learn more &gt;</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default About