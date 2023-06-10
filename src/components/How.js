import React from 'react'
import stripe from '../assets/stripe.svg'
import mobileStripe from '../assets/mobilestripe.svg'

const How = () => {
    return (
        <div className=' w-[100vw] h-[100vh] md:h-[30rem] bg-slate-800 flex flex-col md:flex-row justify-between md:items-center pt-[3rem] md:pt-0 overflow-hidden'>
            <div className='hidden md:flex h-[inherit] lg:flex'>
                <img src={stripe} alt="stripe" style={{ objectFit: 'cover' }} />
            </div>
            <div className='px-[1.5rem] lg:w-[50%] lg:mr-[10%] w-[100vw] md:h-fit'>
                <h1 className='text-6xl text-white font-mono font-bold'>How we work</h1>
                <p className='mt-[1.25rem] text-[18px] text-white leading-8'>When it comes to <span className='font-bold'>optimising</span> things in logistics, we always look at the bigger picture. This leads to a logistics platform that improves efficiency by default but is <span className='font-bold'>human-friendly </span>at the same time.</p>
                <button className='mt-[2rem] border px-5 font-semibold py-3 text-white font-mono  rounded-3xl hover:bg-white hover:text-slate-800'>Learn more &gt;</button>
            </div>
            <div className='md:hidden lg:hidden w-[100vw] '>
                <img src={mobileStripe} alt="stripe" style={{ objectFit: 'cover' }} className='w-[100%]' />
            </div>

        </div>
    )
}

export default How