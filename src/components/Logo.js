import React from 'react'
import city from '../assets/city-hub.c0e93c91.svg'
import bakkie from '../assets/e-bakkie.02a85596.svg'
import bouw from '../assets/bouw-logistics.1d262d86.svg'
import cb from '../assets/cb.93419f0c.svg'
// import havi from '../assets/havi.bd4b9f48.svg'
import arp from '../assets/ARP.b5f3bbf0.svg'
import compass from '../assets/compass-group.bd964826.svg'
const Logo = () => {
    const logos = [
        {
            id: 1,
            img: city,
            alt: 'Cityhub logo'
        },
        {
            id: 2,
            img: bakkie,
            alt: 'Bakkie logo'
        },
        {
            id: 3,
            img: bouw,
            alt: 'Bouw logo'
        },
        {
            id: 4,
            img: cb,
            alt: 'CB logo'
        },
        {
            id: 5,
            img: arp,
            alt: 'Arp logo'
        },
        {
            id: 6,
            img: compass,
            alt: 'Compass logo'
        },
    ]
    return (
        <div className='px-[1.5rem] flex flex-row flex-wrap items-center md:px-[17%] justify-center gap-[4rem] py-[5rem]'>
            {
                logos.map((item) => {
                    return (
                        <a href='' className='' key={item.id}>
                            <img src={item.img} alt={item.alt} className='w-[9rem] h-[5rem]' />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Logo