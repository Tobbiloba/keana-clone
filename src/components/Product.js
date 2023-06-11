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


// import React, { useState, useEffect, useRef } from 'react';
// import ProductMenu from './ProductMenu';
// import Homepage from './Homepage';

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
//         <div className='bg-none'>
//             <Homepage />
//             <nav className='h-44 border'>
//                 <ul>
//                     <ProductMenu
//                         sections={sections}
//                         activeSection={activeSection}
//                         handleMenuItemClick={handleMenuItemClick}
//                     />
//                 </ul>
//             </nav>
//             <div className='mt-0'>
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
import Homepage from './Homepage';
import Insight from './Insight';
import Improvement from './Improvement';
import Accountability from './Accountability';
import Difference from './Difference';
import Roll from './Roll';
import Banner from './Banner';
import Footer from './Footer';

const ScrollMenu = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            let active = null;
            for (let i = 0; i < sectionsRef.current.length; i++) {
                const section = sectionsRef.current[i];
                const { top, bottom } = section.getBoundingClientRect();
                const offset = window.innerHeight * 0.5; // Adjust the offset as needed

                if (top <= offset && bottom >= offset) {
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
            <Homepage />
            <nav className='h-'>
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
                <div ref={(el) => (sectionsRef.current[0] = el)} >
                    <Insight />
                </div>
                <div ref={(el) => (sectionsRef.current[1] = el)}>
                    <Improvement />
                </div>
                <div ref={(el) => (sectionsRef.current[2] = el)}>
                    <Accountability />
                </div>
            </div>
            <div>
                <Difference />
                <Roll />
                <Banner />
                <Footer />
            </div>
        </div>
    );
};

export default ScrollMenu;
