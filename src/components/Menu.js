import React, { useState } from 'react'
import logo from '../assets/keana-logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import MenuIcon from '@mui/icons-material/Menu';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const DropDown = () => {
    const options = [
        {
            id: 1,
            name: 'EN'
        },
        {
            id: 2,
            name: 'NL'
        }
    ]
    const [selected, setSelected] = useState('EN')
    const [showOptions, setShowOptions] = useState(false)

    const setOptions = () => {
        setShowOptions(!showOptions)
    }
    return (
        <div>
            <div className='flex flex-row ' onClick={setOptions}>
                <h1 className='text-white'>{selected}</h1>
                <ArrowDropDownIcon style={{ color: 'white' }} />
            </div>
            {
                showOptions &&
                <div className='w-[100vw] h-[100vh] left-0 top-0 flex justify-center items-center absolute'>
                    <div className='absolute top-0 left-0 w-[100vw] h-[100vh]' onClick={setOptions}></div>
                    <div className=' bg-slate-500 rounded-2xl w-[80vw] overflow-hidden z-10' >
                        {options.map((item) => {
                            return (
                                <div key={item.id} className='px-4 py-3 border border-slate-500 border-b-white flex flex-row justify-between items-center' onClick={() => { setSelected(item.name) }}>
                                    <h1 className={`text-xl  ${item.name === selected ? 'text-white' : 'text-slate-800'}`}>
                                        {item.name}
                                    </h1>
                                    <div className='w-7 rounded-full h-7 border flex items-center justify-center'>
                                        <div className={`w-4 h-4 rounded-full ${item.name === selected ? 'bg-white' : ''}`}></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            }


        </div>
    )
}
const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className='bg-slate-800  shadow-md shadow-black container max-w-[100vw] overflow-x-hidden w-[100vw]'>
            <div className='lg:hidden'>
                <div className='py-4 flex flex-row justify-between items-center'>
                    <div>
                        <img src={logo} alt='keana Logo' className='w-40 cursor-pointer' />
                    </div>
                    <div className=''>

                        <DropDown />

                    </div>
                    <div>
                        <img src={menu} alt='menu icon' onClick={handleMenu} />
                    </div>
                </div>


            </div>
            {
                toggleMenu
                &&
                <div className='absolute w-[100vw] left-0 lg:px-[4rem] z-auto top-0 py-6 h-[100vh] bg-slate-800 flex flex-col px-[2rem] justify-between lg:justify-normal'>
                    <div className='flex justify-end'>
                        <img src={close} onClick={handleMenu} className='cursor-pointer' />
                    </div>
                    <div className='flex flex-row justify-between  text-white lg:mt-[20vh]'>
                        <div className='lg:w-[40%]'>
                            <div className='border py-1 border-slate-800 border-b-white'>
                                <h1 className='font-light font-mono'>MENU</h1>
                            </div>
                            <div className='mt-10'>
                                <h1 className='mt-3 text-xl font-light font-mono text-slate-400 hover:text-white'>HOME</h1>
                                <h1 className='mt-3 text-xl font-light font-mono text-slate-400 hover:text-white'>PRODUCT</h1>
                                <h1 className='mt-3 text-xl font-light font-mono text-slate-400 hover:text-white'>ABOUT US</h1>
                                <h1 className='mt-3 text-xl font-light font-mono text-slate-400 hover:text-white'>CONTACT</h1>
                            </div>
                            <button className='border rounded-3xl px-3 py-2 font-mono mt-8 bg-gray-600'>Book a demo</button>
                        </div>
                        <div className='w-[35%] lg:w-[40%]'>
                            <div className='border py-1 border-slate-800 border-b-white'>
                                <h1 className='font-light font-mono'>CONTACT</h1>
                            </div>
                            <div className='mt-10'>
                                <h1 className='mt-3 font-light font-mono'>KEANA BV.</h1>
                                <p className='text-[12px]'>c/co City Hub Holding Atoomweg 1 3542 AA Utrecht The Netherlands</p>
                                <h1 className='mt-4 font-mono text-[14px]'>Call:</h1>
                                <p className='text-[12px]'>+31 (0)85 40 10738</p>
                                <h1 className='mt-4 font-mono text-[14px]'>Mail:</h1>
                                <p className='text-[12px]'>info@keana.io</p>
                                <h1 className='mt-4 font-mono text-[14px]'>Social Media:</h1>
                            </div>
                            <a href='https://www.linkedin.com/company/keana/' target='_blank' className='cursor-pointer'>
                                <LinkedInIcon style={{ fontSize: '40px' }} className='mt-2' />
                            </a>

                        </div>
                    </div>
                    <div></div>
                </div>
            }
            <div className='hidden lg:flex max-w-none w-[100vw] py-4  flex-row justify-between items-center'>
                {/* <div className='py-4 flex flex-row justify-between items-center'> */}
                <div>
                    <img src={logo} alt='keana Logo' className='w-40 cursor-pointer' />
                </div>
                <div className='ml-10'>
                    <h1 className='text-[18px] font-bold text-white'>Call Us <span className='text-[17px] font-light ml-3'>+31 (0)85 40 10 738</span></h1>
                </div>
                <button className='px-5 py-2 rounded-3xl text-white bg-slate-600'>Book a demo</button>

                <div>
                    <img src={menu} alt='menu icon' onClick={handleMenu} />
                </div>
                <div className=''>

                    <DropDown />

                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Menu