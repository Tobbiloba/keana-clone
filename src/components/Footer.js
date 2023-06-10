import React from 'react'
import logo from '../assets/keana-logo.svg'
const Footer = () => {
    return (
        <div className='bg-slate-800 w-[100vw] px-[2rem] md:px-[10%] py-[3rem] flex flex-row justify-between'>
            <div className='flex flex-col md:flex-row md:w-[35%] lg:w-[50%] lg:justify-evenly  justify-between '>
                <div className='flex flex-col gap-3 '>
                    <a className='text-white text-[17px] font-mono hover:text-slate-500'>Home</a>
                    <a className='text-white text-[17px] font-mono hover:text-slate-500'>Product</a>
                    <a className='text-white text-[17px] font-mono hover:text-slate-500'>About us</a>
                </div>
                <div className='flex flex-col mt-3 gap-3 md:mt-0'>
                    <a className='text-white text-[17px] font-mono hover:text-slate-500'>Contact</a>
                    <a className='text-white text-[17px] font-mono hover:text-slate-500'>LinkedIn</a>
                </div>
            </div>
            <div className='gap-[3rem] flex flex-col md:flex-row md:w-[55%] lg:w-[50%] lg:justify-evenly'>
                <div className='text-white text-[16px] gap-3 flex flex-col'>
                    <h1>Keana BV</h1>
                    <h1>c/o City Hub <br />Holding</h1>
                    <h1>Attomweg 1</h1>
                    <h1>3542 AA Utrecht</h1>
                </div>
                <div className=''>
                    <div className='text-white text-[14px] font-mono'>
                        <h1>Tel: <a href="tel:+31854010738" className='text-slate-300 '>+31 (0)85 40 10 738</a></h1>
                        <h1>Mail: <a href="mailto:info@keana.io" class="text-slate-300">info@keana.io</a></h1>

                    </div>
                    <div className='mt-[1rem] '>
                        <img src={logo} className='w-[8rem]' alt='logo' />
                        <h1 className='text-white font-mono text-xl mt-[.5rem]'>Let it roll</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer