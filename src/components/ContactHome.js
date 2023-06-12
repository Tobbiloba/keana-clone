import React from 'react'
import img from '../assets/homepagebackground.webp'
const ContactHome = () => {
    return (
        <div className='px-[1.5rem] bg-slate-700 pt-[11.5rem] pb-[5rem] md:flex flex-row-reverse justify-between md:px-[5%] lg:px-[17%]'>
            <div className=' md:w-[40%] lg:w-[25%]'>
                <img src={img} />
            </div>
            <div className='mt-[3rem] md:w-[50%]'>
                <h1 className='text-slate-100 text-6xl font-mono'>Say hi <br />to Keana</h1>
                <p className='mt-[1.5rem] text-white font-mono'>Contact us if you want to regain a full view on your logistics chain. Below you'll find our people you can contact directly.</p>
                <button className='mt-[1rem] px-[2.5rem] py-3 rounded-3xl font-mono bg-slate-300'>Contact our people</button>
            </div>


        </div>
    )
}

export default ContactHome