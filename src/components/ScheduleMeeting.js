import React from 'react'
import img from '../assets/6266a9bbccad05c1fc87aa3a_Logo_Vectera_Default.svg'
const ScheduleMeeting = () => {
    return (
        <div className='bg-slate-100 py-[2rem] px-[1rem]'>
            <div>
                <div>
                    <img src={img} alt="vectera logo" className='h-[40px]' />
                </div>
            </div>
            <div className='mt-[2rem] md:flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold font-mono text-center'>Book a meeting with Keana B.V.</h1>
                <div className='w-[100%] md:w-[60%] lg:w-[40%] mt-[2rem] bg-slate-200 h-[25rem] flex items-center justify-center'>
                    <h1>Unavailable</h1>
                </div>
            </div>
        </div>
    )
}

export default ScheduleMeeting