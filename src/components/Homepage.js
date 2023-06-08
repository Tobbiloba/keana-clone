import React from 'react'
import Menu from './Menu'
import background from '../assets/homepagebackground.webp';
import stripe from '../assets/bg-vector.fabacc8e.svg'
const Homepage = () => {
    return (
        <div className=' bg-slate-500  max-w-[100vw] w-[100vw] h-[100vh] overflow-hidden' >
            <div className='absolute z-20'>
                <Menu />
            </div>

            <div className='flex flex-col lg:flex-row w-[100%] lg:justify-between h-[100%]  lg:pl-[12.5%]'>
                <div className='w-[100%] pt-6 h-[50%] flex flex-col justify-center px-[1rem] lg:px-0 lg:w-[35%] lg:h-[100%] '>
                    <h1 className='text-3xl font-mono font-bold lg:text-5xl text-slate-800'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 border w-fit px-6 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div>
                <div className='w-[100%]  h-[50%] lg:w-[60%] lg:h-[100%] '>
                    <div className=' absolute z-10 flex  mt-[3rem] lg:mt-[15rem] lg:mb-0 justify-center items-center'>
                        <img src={background} alt='homepage background image' className='w-[60%] lg:w-[75%]' />
                    </div>
                    <div className='lg:h-[inherit] lg:w-[100%]  w-screen  h-[20rem]'>
                        <img src={stripe} alt="stripe" className=' overflow-hidden relative bottom-40 lg:w-[100%] lg:bottom-8 lg:left-0 left-20 max-w-none w-[35rem] lg:rotate-0 rotate-90 h-[45rem] lg:h-[62rem]' />
                    </div>
                </div>
                {/* <div className='mt-12 lg:mt-14 border lg:w-[35%] lg:ml-16'>

                </div>
                <div
                    className='w-fit h-fit lg:h-[100%] lg:pb-12 lg:w-[60%]   z-10 overflow-hidden'
                >
                   
                    



                </div>
               */}



            </div>
        </div>
    )
}

export default Homepage