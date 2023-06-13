import React from 'react'

const Manifesto = () => {
    return (
        <div className='py-[3rem] px-[1.5rem]'>
            <h1 className='text-center text-slate-800 font-mono text-4xl '>Our manifesto</h1>
            <h1 className='mt-[2rem] font-mono text-[15px] text-slate-600'>At Keana, we believe that the logistics industry is well on its way towards a future that requires fewer heavy trucks in the streets. This is how our industry contributes to lowering humanities' carbon footprint and to making cities a more human-friendly environment.</h1>

            <h1 className='mt-[2rem] font-mono text-[15px] text-slate-600'>Key in this development is the rise of the distribution hub. Big trucks simply deliver their cargo at the hub located at the edge of a densely populated area. From there, a decentralised network of so-called 'last mile' transportation companies use less polluting and less invasive smart mobility vehicles to deliver the goods. A brilliant solution indeed.</h1>
            {/* <div> */}
            <div className='py-[4rem] flex justify-end'>

                <p className='w-[70%] text-green-500 font-mono text-xl'>But unfortunately, it also leads to more handlers being involved in the now decentralised distribution chain, clogging up the current system.</p>

            </div>
            <h1 className='mt-[2rem] font-mono text-[15px] text-slate-600'>Everyone is using different software systems, making it quite daunting to keep track of a shipment, whilst receivers still expect real-time updates on the status of their orders. Tackling this problem takes time; time that can't be spent on efficiency improvements, for example. And let's not forget the fact that everyone is increasingly held accountable for their Sustainable Development Goals. Nobody said change was easy, right?</h1>
            {/* </div> */}
            <p className='mt-[2rem] font-mono text-[15px] text-slate-600 font-bold text-center'>Now that's where Keana comes in.</p>
            <h1 className='mt-[1rem] font-mono text-[15px] text-slate-600'>At Keana we offer a logistics platform that connects all possible software systems, resulting in a single, simple overview of the new decentralised distribution chain. Next to oversight, it offers insight into your carbon footprint, and it nudges the involved handlers towards more efficient planning, lowering costs.</h1>
            <p className='py-[4rem] text-green-500 font-mono font-bold text-xl'>Most essential to all this, is the fact that we embrace a human approach.</p>
            <h1 className='mt-[2rem] font-mono text-[15px] text-slate-600'>We're not forcing anyone onto our platform: Keana is system-agnostic, so people can keep on using their trusted software alongside Keana. And the efficiency improvements that we promise won't come at the cost of people involved: we'd rather not develop algorithms pinpointing delivery windows up to the second, for example.</h1>
            <h1 className='mt-[2rem] font-mono text-[15px] text-slate-600'>To the contrary: we believe that fuzzy algorithms, embracing a certain amount of uncertainty and freedom in human behaviour, always lead to the best logistics solutions. Keana does the maths, leaving creativity, intuition and experience to the people using our platform.</h1>
            <p className='mt-[2rem] font-mono text-[15px] text-slate-600 font-bold text-center'>Keana. Let it roll</p>
        </div>
    )
}

export default Manifesto