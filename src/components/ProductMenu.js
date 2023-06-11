// import React, { useState, useEffect, useRef } from 'react';

// const ProductMenu = ({ sections, activeSection, handleMenuItemClick }) => {
//     const [isFixed, setIsFixed] = useState(false);
//     const containerRef = useRef(null);
//     const containerHeightRef = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const containerTop = containerRef.current.getBoundingClientRect().top;
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             setIsFixed(containerTop <= 85);

//             if (scrollTop < containerHeightRef.current) {
//                 setIsFixed(false);
//             }
//         };

//         const handleResize = () => {
//             containerHeightRef.current = containerRef.current.clientHeight;
//         };

//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', handleResize);

//         handleResize(); // Initialize containerHeightRef

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const containerStyles = {
//         position: isFixed ? 'fixed' : 'relative',
//         // marginTop: isFixed ? 'mt-[80' : 'mt-0',
//         top: 0,
//         width: '100%',
//     };


//     return (
//         <div style={containerStyles} ref={containerRef} className={` ${isFixed ? 'mt-20' : 'mt-0'}`}>
//             <ul>
//                 {sections.map((section, index) => (
//                     <li
//                         key={index}
//                         className={`${index === activeSection ? 'active text-red-500' : ''} text-xl `}
//                         onClick={() => handleMenuItemClick(index)}
//                     >
//                         <a href={`#section-${index + 1}`}>{section}</a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductMenu;


import React, { useState, useEffect, useRef } from 'react';

const ProductMenu = ({ sections, activeSection, handleMenuItemClick }) => {
    const [isFixed, setIsFixed] = useState(false);
    const containerRef = useRef(null);
    const containerHeightRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsFixed(containerTop <= 85);

            if (scrollTop < containerHeightRef.current) {
                setIsFixed(false);
            }
        };

        const handleResize = () => {
            containerHeightRef.current = containerRef.current.clientHeight;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize(); // Initialize containerHeightRef

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const containerStyles = {
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        width: '100%',
    };

    return (
        <div style={containerStyles} ref={containerRef} className={`py-[1rem] ${isFixed ? 'mt-20' : 'mt-0'} bg-slate-800`}>
            <ul className='text-center text-white font-mono gap-3 flex flex-col items-center'>
                {sections.map((section, index) => (
                    <li
                        key={index}
                        className={`text-xl border-2 border-slate-800 ${index === activeSection
                            ? `active w-fit px-2 ${activeSection === 0 ? 'border-b-red-500' : activeSection === 1 ? 'border-b-green-500' : activeSection === 2 ? 'border-b-blue-500' : ''}`
                            : ''
                            }`}
                        // className={`${index === activeSection ? {`active  w-fit px-2 ${item.name === '' ? '' : ''}}` : ''} text-xl`}

                        onClick={() => handleMenuItemClick(index)}
                    >
                        <a href={`#section-${index + 1}`}>{section}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductMenu;
