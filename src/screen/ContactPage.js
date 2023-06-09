import React from 'react'
import Menu from '../components/Menu'

import ContactHome from '../components/ContactHome'
import ScheduleMeeting from '../components/ScheduleMeeting'
import Roll from '../components/Roll';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import GoogleMapComponent from '../components/GoogleMapComponent';
const ContactPage = () => {
    return (
        <div className='max-w-[100vw]'>

            <Menu />
            <ContactHome />
            <ScheduleMeeting />
            <ContactForm />
            <GoogleMapComponent />
            <Roll />
            <Banner />
            <Footer />

        </div>
    )
}

export default ContactPage