// import React, { useState, useEffect, useRef } from 'react';
// import ProductMenu from './ProductMenu';

// const ScrollMenu = () => {
//     const [activeSection, setActiveSection] = useState(null);
//     const sectionsRef = useRef([]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;

//             let active = null;
//             for (let i = 0; i < sectionsRef.current.length; i++) {
//                 const section = sectionsRef.current[i];
//                 const { top, height } = section.getBoundingClientRect();

//                 if (scrollPosition >= top && scrollPosition < top + height) {
//                     active = i;
//                     break;
//                 }
//             }

//             setActiveSection(active);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleMenuItemClick = (index) => {
//         const section = sectionsRef.current[index];
//         const { top } = section.getBoundingClientRect();

//         window.scrollTo({
//             top: window.scrollY + top,
//             behavior: 'smooth',
//         });
//     };

//     const sections = ['Insight', 'Improvement', 'Accountability']; // Define the sections array here

//     return (
//         <div>
//             <nav>
//                 <ul>
//                     {sections.map((_, index) => (
//                         <ProductMenu
//                             key={index}
//                             sections={sections}
//                             activeSection={activeSection}
//                             handleMenuItemClick={handleMenuItemClick}
//                         />
//                     ))}
//                 </ul>
//             </nav>
//             <div>
//                 {/* Replace the child components with your own */}
//                 <div ref={(el) => (sectionsRef.current[0] = el)} style={{ height: '100vh', background: '#f1f1f1' }}>
//                     Section 1
//                 </div>
//                 <div ref={(el) => (sectionsRef.current[1] = el)} style={{ height: '100vh', background: '#ddd' }}>
//                     Section 2
//                 </div>
//                 <div ref={(el) => (sectionsRef.current[2] = el)} style={{ height: '100vh', background: '#ccc' }}>
//                     Section 3
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ScrollMenu;


import React, { useState, useEffect, useRef } from 'react';
import ProductMenu from './ProductMenu';

const ScrollMenu = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            let active = null;
            for (let i = 0; i < sectionsRef.current.length; i++) {
                const section = sectionsRef.current[i];
                const { top, height } = section.getBoundingClientRect();

                if (scrollPosition >= top && scrollPosition < top + height) {
                    active = i;
                    break;
                }
            }

            setActiveSection(active);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuItemClick = (index) => {
        const section = sectionsRef.current[index];
        const { top } = section.getBoundingClientRect();

        window.scrollTo({
            top: window.scrollY + top,
            behavior: 'smooth',
        });
    };

    const sections = ['Insight', 'Improvement', 'Accountability']; // Define the sections array here

    return (
        <div className='bg-none'>
            <nav className='h-44 border'>
                <ul>
                    <ProductMenu
                        sections={sections}
                        activeSection={activeSection}
                        handleMenuItemClick={handleMenuItemClick}
                    />
                </ul>
            </nav>
            <div className='mt-0'>
                {/* Replace the child components with your own */}
                <div ref={(el) => (sectionsRef.current[0] = el)} style={{ height: '100vh', background: '#f1f1f1' }}>
                    Section 1
                </div>
                <div ref={(el) => (sectionsRef.current[1] = el)} style={{ height: '100vh', background: '#ddd' }}>
                    Section 2
                </div>
                <div ref={(el) => (sectionsRef.current[2] = el)} style={{ height: '100vh', background: '#ccc' }}>
                    Section 3
                </div>
            </div>
        </div>
    );
};

export default ScrollMenu;
