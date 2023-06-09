import React from 'react'
import Menu from './Menu'
import background from '../assets/homepagebackground.webp';
import stripe from '../assets/bg-vector.fabacc8e.svg'
const Homepage = () => {
    return (
        <div className=' bg-slate-500 w-[100vw] lg:h-[70vh]  md:h-[800px] h-[100vh] overflow-y-hidden' >
            <div className='left-0 z-30 fixed  w-[100vw]'>
                <Menu />
            </div>

            <div className='flex  md:h-[800px]  flex-col md:flex-row overflow-hidden bg-slate-800  lg:h-[70vh] h-[100%]  '>
                <div className='h-[50%] md:h-[100%] lg:pl-[15%]   mt-[80px] lg:h-[100%]  md:w-[50%]  px-[2rem] md:px-[2rem] flex flex-col justify-center'>
                    <h1 className='text-3xl font-mono font-bold lg:text-5xl text-slate-700'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 border w-fit px-6 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div>

                <div className='overflow-hidden z-10'>


                    <div className='w-[100%] pl-6 z-10 h-[100%] flex justify-center items-center '>
                        <img src={background} alt='homepage background image' className='w-[70%] md:w-[85%] lg:w-[70%]' />
                    </div>

                </div>
                <div className='absolute bottom-0 z-0 md:hidden w-[100vw] lg:hidden overflow-hidden h-[41%]  '>
                    <img src={stripe} alt="stripe" className='-z-10 rotate-90 border max-w-none w-[35rem] h-[45rem] relative bottom-[7.5rem]' />
                </div>

                <div className='absolute hidden md:h-[800px] md:flex overflow-hidden z-[0] right-0 lg:h-[70vh]'>
                    <img src={stripe} alt="stripe" className=' relative  left-[12.5rem] lg:left-0 bottom-[5rem] max-w-none w-[40rem] lg:w-[50rem] top-[3rem]' />
                </div>
                {/* <div className='h-[50%] md:h-[100%] md:w-[50%] bg-slate-800 overflow-hidden flex  items-center'>
                    <div className='absolute md:hidden w-[100vw] lg:hidden overflow-hidden h-[45%]  flex justify-center'>
                        <img src={stripe} alt="stripe" className='rotate-90 max-w-none w-[35rem] h-[45rem] relative bottom-[7.5rem]' />
                    </div>
                    <div className='absolute hidden md:flex overflow-x-hidden h-[800px] lg:h-[100%] lg:mr-[10rem] overflow-hidden w-[100vw] top-0 lg:flex justify-center'>
                        <img src={stripe} alt="stripe" className=' relative bottom-[5rem] max-w-none w-[40rem] right-[5rem] top-[5rem]' />
                    </div>
                    <div className='w-[100%] pl-6 z-10 h-[100%] flex justify-center items-center '>
                        <img src={background} alt='homepage background image' className='w-[70%] md:w-[85%] lg:w-[50%]' />
                    </div>

                </div>
            {/* <div className='w-[100%] border lg:h[inherit] pt-6 h-[50%] flex flex-col justify-center  px-[1rem] lg:px-0 lg:w-[35%]'>
                    <h1 className='text-3xl font-mono font-bold lg:text-5xl text-slate-800'>Regain a full view on your logistics chain.</h1>
                    <p className='mt-6 font-bold text-slate-300'>Keana connects all possible transport software systems, resulting in a platform offering a single overview of the new decentralised distribution chain.</p>
                    <button className='mt-8 border w-fit px-6 rounded-[3rem] text-slate-200 bg-slate-400 py-4'>Learn more</button>
                </div> */}
                {/* <div className='w-[100%]  h-[50%] border lg:w-[60%] md:w-[60%] lg:h-[100%] '>
                    <div className=' absolute z-10 flex   mt-[3rem] lg:mt-[15rem] lg:mb-0 justify-center items-center'>
                        <img src={background} alt='homepage background image' className='w-[65%] lg:w-[75%]' />
                    </div>
                    <div className='lg:h-[inherit]  lg:w-[100%] border w-screen  h-[20rem]'>
                        <img src={stripe} alt="stripe" className='md:rotate-0 md:w-[100%] overflow-hidden relative bottom-40 lg:w-[100%] lg:bottom-8 lg:left-0 left-20 max-w-none w-[35rem] lg:rotate-0 rotate-90 h-[45rem] lg:h-[62rem]' />
                    </div>
                </div> */}
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