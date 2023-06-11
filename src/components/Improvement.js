import React from 'react'
import img from '../assets/improvement.ed3d5e71.svg'
const Improvement = () => {
    return (
        <div className='w-[100vw] px-[1.5rem] md:px-[2rem] lg:px-[10%] py-[5rem]'>
            <div className='border-2 border-white border-b-green-500 pb-10 px-3 md:flex justify-between'>
                <h1 className='text-[30px] md:w-[50%] text-green-600 font-mono font-bold'>Improve efficiency, lower costs.</h1>
                <p className='font-mono md:w-[45%] md:mt-0 leading-6 mt-4'>Through powerful planning tools, our platform nudges all participating handlers towards more efficient planning, lowering costs for everyone involved</p>
            </div>
            <div className='mt-[2.5rem] md:flex justify-between'>
                <div className='border rounded-md overflow-hidden md:w-[50%]'>
                    <img src={img} alt="image" className='' />
                </div>
                <div className='mt-[3rem] md:w-[45%] md:mt-0'>
                    <h1 className='text-[30px] font-mono font-bold text-green-600'>Insight into all shipping details</h1>
                    <p className='font-mono leading-6 mt-4'>Shippers wil manage the shipments which seemlessly fit in their transport system. Therefore they can focus on efficiency without missing on business opportiunties</p>
                    <p className='font-mono leading-6 mt-4'>Through the interaction with shippers different transport management systms, Keana offers insight on cost saving an efficiency options.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Improvement