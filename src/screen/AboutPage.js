import React from 'react'
import Menu from '../components/Menu'
import AboutRoll from '../components/AboutRoll'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Manifesto from '../components/Manifesto';
import Optimisation from '../components/Optimisation';
const AboutusPage = () => {
    return (
        <div>
            <Menu />
            <AboutRoll />
            <Manifesto />
            <Optimisation />
            <Banner />
            <Footer />
        </div>
    )
}

export default AboutusPage