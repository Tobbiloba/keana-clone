import React from 'react'
import ReactPlayer from 'react-player';
import background from '../assets/factory-bg.d8864a2d.webp';
import video from '../assets/vid.mp4'
const Review = () => {
    return (
        <div className=' w-[100vw] flex flex-col justify-center items-center overflow-hidden'>
            <div className='pt-[1rem] lg:py-[2rem]'>
                <h1 className='text-2xl font-bold font-mono text-slate-500'>What our client says</h1>
            </div>
            {/* <div className=" w-screen h-[80vh] border">
                <ReactPlayer
                    url="https://cdn.dribbble.com/userupload/5512656/file/original-331e852d29670387763558a651455b70.mp4"
                    playing={true}
                    loop={true}
                    muted={true}
                    width="80vh"
                    height="100%"
                />
                <h1>Lol</h1>
            </div> */}

            {/* <div className='w-[100vw] h-[80vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center lg:justify-end lg:px-[10rem] overflow-hidden'>
                <div className=" w-sceen absolute h-[80vh] overflow-hidden w-[100vw]">
                    <ReactPlayer
                        url="https://cdn.dribbble.com/userupload/5512656/file/original-331e852d29670387763558a651455b70.mp4"
                        playing={true}
                        loop={true}
                        muted={true}
                        width="70rem"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='w-[80%]  h-[70%] lg:w-[20rem] md:h-[30rem] md:w-[40%] md:flex flex-col md:py-[3rem] justify-center tems-center md:px-[1.5rem] backdrop-blur-md rounded-2xl bg-white/50  border z-10 p-[1rem]' >
                    <h1 className='text-slate-500 text-[16px] leading-7 font-mono'>As market leader City Hub makes sure that goods from our customers and city logistic partners are delivered efficiently &amp; sustainably in cities. By using Keana the IT process runs smoothly and our customers are offered multiple last mile carriers just by using a single connection</h1>
                    <div className='mt-[1rem]'>
                        <p className='text-slate-800 text-xl font-bold font-mono'>Karel Hoeben</p>
                        <p className='text-[14px] font-mono'>CEO - City Hub</p>
                    </div>
                </div>
            </div> */}
            {/* <div className=' mt-[4rem] md:h-[60vh] h-[80vh] w-[100%]'>
                <img src={background} alt="background image " style={{ objectFit: 'cover' }}
                    className='w-auto h-[100%]' />
            </div> */}
            <div className='w-[100vw] h-[80vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center lg:justify-end lg:px-[10rem]' style={{ backgroundImage: `url(${background})` }}>
                <div className='w-[80%]  h-[70%] lg:w-[20rem] md:h-[30rem] md:w-[40%] md:flex flex-col md:py-[3rem] justify-center tems-center md:px-[1.5rem] backdrop-blur-md rounded-2xl bg-white/50  border z-10 p-[1rem]' >
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