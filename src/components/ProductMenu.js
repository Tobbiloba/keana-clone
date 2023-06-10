import React, { useState, useEffect, useRef } from 'react';

const ProductMenu = () => {
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
        top: 85,
        width: '100%',
    };

    return (
        <div style={containerStyles} ref={containerRef}>
            {/* Your content goes here */}
            <header style={{ background: '#000', color: '#fff', padding: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Product Menu</h1>
            </header>
            <main style={{ padding: '2rem' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper in tortor et dapibus. Vivamus sollicitudin ex ac dolor consectetur tempus. Aliquam quis mollis arcu. Suspendisse et lobortis odio, in interdum risus.</p>
                <p>Donec rutrum purus vitae mi mattis, sit amet dictum sem consequat. Quisque gravida rhoncus fringilla. Curabitur accumsan ligula nunc, in pellentesque lacus commodo eget. Duis laoreet orci et tortor rutrum, in lacinia enim pellentesque.</p>
                <p>Sed et purus a elit tincidunt tincidunt non at leo. Donec non rutrum purus. Nam volutpat est non tellus ultricies, eget condimentum nunc interdum. Suspendisse potenti. Aenean suscipit laoreet arcu eget ullamcorper.</p>
                {/* More content */}
            </main>
        </div>
    );
};

export default ProductMenu;
