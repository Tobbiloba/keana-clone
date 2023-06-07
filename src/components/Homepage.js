import React from 'react'
import Menu from './Menu'
import background from '../assets/homepagebackground.webp';
import stripe from '../assets/bg-vector.fabacc8e.svg'
const Homepage = () => {
    return (
        <div className=' bg-slate-500'>
            <Menu />
            <div className='container flex flex-col justify-between items-center h-[100vh] overflow-hidden border'>
                <div className='mt-12'>
                    <h1 className='text-3xl font-mono font-bold text-slate-800'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 border px-6 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div>
                <div
                    className='w-full flex items-center justify-center py-8 z-10'
                >
                    <img src={background} alt='homepage background image' className='w-[80%] ' />

                </div>
                <div className='absolute h-[20rem] bottom-0 left-0  w-screen overflow-hidden'>
                    <img src={stripe} alt="stripe" className=' w-[35rem] h-[25rem] relative right-[10rem] max-w-none ' />
                </div>



            </div>
        </div>
    )
}

export default Homepage