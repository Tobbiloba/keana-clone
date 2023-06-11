import React from 'react'
import img from '../assets/snow-flake-bg.ea90741f.svg'
const Difference = () => {
    const containerStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Add other background properties as needed */
    };
    const traditionals = [
        {
            id: 1,
            item: 'Single point solution'
        },
        {
            id: 2,
            item: 'Exclusive'
        },
        {
            id: 3,
            item: 'Track & Trace'
        },
        {
            id: 4,
            item: 'Legacy software'
        },
        {
            id: 5,
            item: 'Specific users'
        },
        {
            id: 6,
            item: 'Complex'
        },
        {
            id: 7,
            item: 'Tech'
        },
        {
            id: 8,
            item: 'Solitary'
        },
        {
            id: 9,
            item: 'Traditional trucks'
        },
    ]

    const Keana = [
        {
            id: 1,
            item: 'All-in-one platform'
        },
        {
            id: 2,
            item: 'Inclusive'
        },
        {
            id: 3,
            item: 'Oversight & Insight'
        },
        {
            id: 4,
            item: 'Future-ready software'
        },
        {
            id: 5,
            item: 'Everyone in the logistics chain'
        },
        {
            id: 6,
            item: 'Simple'
        },
        {
            id: 7,
            item: 'Human'
        },
        {
            id: 8,
            item: 'Connected'
        },
        {
            id: 9,
            item: 'Smart mobility'
        },
    ]
    return (
        <div className='w-[100vw] px-[1.5rem] bg-slate-500 py-[4rem] flex justify-center' style={containerStyles}>
            <div className='bg-white rounded-2xl py-[4rem] px-[2rem] md:flex   flex-col md:w-[85%] lg:w-[60%]'>
                <h1 className='text-[26px] font-mono md:w-[80%] md:ml-[7.5%] text-slate-500 font-bold text-center'>We do things diffenently than your traditional logistics software:</h1>
                <div className='mt-[5rem] md:flex  mg:w-[inherit] md:justify-between lg:justify-evenly'>
                    <div className='md:text-right md:flex flex-col  md:w-fit md:py-[1.5rem] md:h-fit'>
                        <h1 className='text-bold text-2xl font-bold text-slate-500'>Traditionals</h1>
                        {
                            traditionals.map((items) => {
                                return (
                                    <div key={items.id} className='mt-[1rem] md:font-normal font-mono font-bold text-slate-800'>
                                        <h1>{items.item}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='hidden md:flex bg-black w-[1px]'></div>
                    <div className='mt-[4rem] text-right md:text-right items-start  md:flex flex-col py-[1.5rem] md:mt-0 md:w-fit'>
                        <h1 className='text-bold text-2xl mb-[1rem]  font-bold  text-slate-500'>Keana</h1>
                        {
                            Keana.map((items) => {
                                return (
                                    <div key={items.id} className='mt-[1rem] font-mono font-bold md:font-normal text-slate-800'>
                                        <h1>{items.item}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Difference