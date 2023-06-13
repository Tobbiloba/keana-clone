import React from 'react'
import ReactPlayer from 'react-player';
import background from '../assets/factory-bg.d8864a2d.webp';
import video from '../assets/vid.mp4'
const Review = () => {
    return (
        <div className=' w-[100vw] flex flex-col justify-center items-center overflow-hidden'>
            <div className='pt-[1rem] lg:py-[2rem]'>
                <h1 className='text-4xl text-center mb-[2rem] md:text-left lg:text-left md:text-3xl lg:text-3xl font-bold font-mono text-slate-500'>What our client says</h1>
            </div>
            <div className='w-[100vw] h-[80vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center lg:justify-end lg:px-[10rem]' style={{ backgroundImage: `url(${background})` }}>
                <div className='w-[80%]  h-fit  lg:w-[20rem] md:h-[30rem] md:w-[40%] md:flex flex-col md:py-[3rem] justify-center tems-center md:px-[1.5rem] backdrop-blur-md rounded-2xl bg-white/50  border z-10 p-[1rem]' >
                    <h1 className='text-slate-500 text-[16px] leading-7 font-mono'>As market leader City Hub makes sure that goods from our customers and city logistic partners are delivered efficiently &amp; sustainably in cities. By using Keana the IT process runs smoothly and our customers are offered multiple last mile carriers just by using a single connection</h1>
                    <div className='mt-[1rem]'>
                        <p className='text-slate-800 text-xl font-bold font-mono'>Karel Hoeben</p>
                        <p className='text-[14px] font-mono'>CEO - City Hub</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review