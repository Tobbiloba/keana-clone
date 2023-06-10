import React from 'react'
import people from '../assets/colleagues-holding-device-large.d5a93fe3.webp';
const Banner = () => {
    return (
        <div className='px-[1.5rem] bg-slate-700 w-[100vw] pt-[5rem] pb-[10rem]'>
            <div className='rounded-2xl  overflow-hidden'>
                <img src={people} className='' />
            </div>
            <div className='mt-[2.5rem]'>
                <h1 className='font-mono font-bold leading-[1.4] text-slate-300 text-4xl'>Regain a full view on your logistics chain.</h1>
                <p className='mt-[.5rem] text-white font-mono'>Keana connects all possible transport software systems, resulting in a platform ofering a single, simple overview of the new decentralised distribution chain.</p>
                <button className='px-9 rounded-3xl py-2 mt-[1.5rem] bg-white hover:border hover:bg-slate-700 hover:text-white'>Learn more</button>
            </div>
        </div>
    )
}

export default Banner