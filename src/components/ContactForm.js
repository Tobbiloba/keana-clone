import React from 'react'

const ContactForm = () => {
    return (
        <div className='px-[1.5rem] md:px-[10%] lg:px-[15%] w-[100vw] py-[2rem] lg:py-[4rem]'>
            <div className='lg:text-center'>
                <h1 className='text-slate-500 font-mono'>This site is protected by reCAPTCHA and the Google <span className='text-cyan-500 font-bold'>Privacy Policy</span> and <span className='text-cyan-500 font-bold'>Terms of Service</span> apply.</h1>
            </div>

            <div className='mt-[4rem] md:flex justify-between lg:justify-between lg:px-[10%]'>
                <div className='md:w-[45%] lg:w-[40%]'>
                    <h1 className='text-4xl font-bold font-mono text-slate-700'>Or send us a message:</h1>
                    <p className='mt-[1rem] text-xl font-mono'>Fill in the form or send us an email at <a href="mailto:info@keana.io" class="underline">info@keana.io</a></p>
                </div>
                <div className='mt-[3rem] flex flex-col gap-[1.5rem] md:w-[35%] lg:w-[40%] md:mt-0'>
                    <input placeholder='Company name:' className='border py-1 px-2 rounded-md font-mono' />
                    <input placeholder='Name:' className='border py-1 px-2 rounded-md font-mono' />
                    <input placeholder='Email:' className='border py-1 px-2 rounded-md font-mono' />
                    <textarea className='border h-[8rem] rounded-md px-2 py-1 font-mono' placeholder='Your inquiry:' />
                    <button className='w-fit border px-[3rem] py-3 rounded-xl bg-black text-white font-mono hover:text-black hover:bg-white hover:border hover:border-black'>Send it</button>
                </div>
            </div>

        </div>
    )
}

export default ContactForm