
import React, { useState, useEffect, useRef } from 'react';
import ProductMenu from '../components/ProductMenu';
import Homepage from './Homepage';
import Insight from '../components/Insight';
import Improvement from '../components/Improvement';
import Accountability from '../components/Accountability';
import Difference from '../components/Difference';
import Roll from '../components/Roll';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

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
