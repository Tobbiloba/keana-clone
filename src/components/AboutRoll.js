import React from 'react';
import img from '../assets/map-vec.d1a30dc3.svg';
// import img from '../assets/map-vec.d1a30dc3 (1).svg';
import Menu from './Menu';
const AboutRoll = () => {
    const containerStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Add other background properties as needed */
    };
    return (
        <div className='bg-slate-700 w-[100vw] px-[1.5rem] flex items-center overflow-hidden h-[100vh]' >
            {/* <div className='z-auto'>
                <Menu />
            </div> */}
            <div className='absolute max-w-[100vw] z-0 w-[100vw]  h-[100vh] top-0 boder left-0' style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'auto 130%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top -200px',
            }}>
            </div>
            {/* <div className='backdrop-blur-sm bg-black/10 w-[100vw] h-[100vh]'>

            </div> */}
            <div className='z-20'>
                <h1 className='text-7xl text-slate-200 font-mono font-black'>Let it <br /> roll</h1>
                <p className='mt-[2rem] text-white font-mono'>Let's unclog the new decentralised distribution chain.</p>
            </div>
        </div>
    )
}

export default AboutRoll