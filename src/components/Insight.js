import React from 'react'
import img from '../assets/insight.3f2cf167.svg'
const Insight = () => {
    return (
        <div className='w-[100vw] bg-cyan-100 px-[1.5rem] py-[5rem] md:px-[2rem] lg:px-[10%]'>
            <div className='border-2 border-cyan-100 border-b-slate-500 pb-10 px-3 md:flex justify-between'>
                <h1 className='text-[30px] md:w-[50%] border font-mono text-slate-500 font-bold'>Insight into your distribution chain</h1>
                <p className='font-mono md:w-[45%] md:mt-0 leading-6 mt-4'>Keana connects all possible software systems, resulting in a single decentralised distribution chain.</p>
            </div>
            <div className='mt-[2.5rem] md:flex justify-between'>
                <div className='border rounded-md overflow-hidden md:w-[50%]'>
                    <img src={img} alt="image" className='' />
                </div>
                <div className='mt-[3rem] md:w-[45%] md:mt-0'>
                    <h1 className='text-[30px] font-mono font-bold text-slate-500'>Insight into all shipping details</h1>
                    <p className='font-mono leading-6 mt-4'>Keana provides insight to all shipping details independent of the platform used by the shipper, via one connection.</p>
                    <p className='font-mono leading-6 mt-4'>Working with keana enables your organisation to use different shippers in specific areas and/or depending of the characteristics of the
                        shipment while keeping full IT control
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Insight