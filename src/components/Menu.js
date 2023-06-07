import React from 'react'
import logo from '../assets/keana-logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import MenuIcon from '@mui/icons-material/Menu';
const Menu = () => {
    return (
        <div className='bg-teal-900 shadow-md shadow-black container'>
            <div className=''>
                <div className='py-4 flex flex-row justify-between items-center'>
                    <div>
                        <img src={logo} alt='keana Logo' className='w-40 cursor-pointer' />
                    </div>
                    <div className=''>
                        <h1 className='text-white text-xl font-mono font-bold'>EN</h1>
                    </div>
                    <div>
                        <img src={menu} alt='menu icon' />
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex'></div>
        </div>
    )
}

export default Menu