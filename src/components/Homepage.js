import React from 'react'
import Menu from './Menu'
import background from '../assets/homepagebackground.webp';
import stripe from '../assets/bg-vector.fabacc8e.svg'
const Homepage = () => {
    return (
        <div className=' bg-slate-500  w-[100vw] lg:h-[70vh]'>
            <Menu />
            <div className='container flex flex-col lg:flex-row justify-between items-center h-[100vh] overflow-hidden'>
                <div className='mt-12'>
                    <h1 className='text-3xl font-mono font-bold lg:text-5xl text-slate-800'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 border px-6 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div>
                <div
                    className='w-fit h-fit flex items-center justify-center   z-10 overflow-hidden'
                >
                    {/* <div className='border z-10 flex  justify-center items-center'>
                        <img src={background} alt='homepage background image' className='w-[60%]' />
                    </div>
                    <div className='absolute border border-red-500 -z-20 overflow-hidden w-screen h-[20rem]'>
                        <img src={stripe} alt="stripe" className=' overflow-hidden relative bottom-40 left-20 max-w-none w-[25rem] rotate-90 h-[40rem]' />
                    </div> */}

                    <div className=' absolute z-10 flex  bottom-[2rem] justify-center items-center'>
                        <img src={background} alt='homepage background image' className='w-[60%]' />
                    </div>
                    <div className='overflow-hidden w-screen  h-[25rem]'>
                        <img src={stripe} alt="stripe" className=' overflow-hidden relative bottom-40 left-20 max-w-none w-[25rem] rotate-90 h-[45rem]' />
                    </div>



                </div>
                {/* <div className='absolute h-[20rem] bottom-0 left-0  w-screen overflow-hidden'> */}

                {/* </div> */}



            </div>
        </div>
    )
}

export default Homepage