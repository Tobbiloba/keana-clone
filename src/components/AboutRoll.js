import React from 'react'
import img from '../assets/map-vec.d1a30dc3.svg'
import Menu from './Menu';
const AboutRoll = () => {
    const containerStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Add other background properties as needed */
    };
    return (
        <div className='bg-slate-700 w-[100vw] h-[100vh]' >
            <div className='z-auto'>
                <Menu />
            </div>

            {/* <div className="absolute w-[100vw] h-[100vh] border">
                <img src={img} alt="img" className='border' />
            </div> */}
            <div>
                <h1>Let it roll</h1>
            </div>
        </div>
    )
}

export default AboutRoll