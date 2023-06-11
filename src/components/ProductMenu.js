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
//         top: 85,
//         width: '100%',
//     };


//     return (
//         <div style={containerStyles} ref={containerRef} className='border border-red-500'>
//             <ul>
//                 {sections.map((section, index) => (
//                     <li
//                         key={index}
//                         className={`${index === activeSection ? 'active' : ''} text-xl font-bold`}
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
            setIsFixed(containerTop <= 85);
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
        position: 'sticky',
        top: isFixed ? 85 : 0,
        width: '100%',
        zIndex: 1,
    };

    return (
        <div style={containerStyles} ref={containerRef} className="border border-red-500">
            <ul>
                {sections.map((section, index) => (
                    <li
                        key={index}
                        className={`${index === activeSection ? 'active' : ''} text-xl font-bold`}
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
