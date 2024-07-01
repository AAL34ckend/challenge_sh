import React from 'react'
import { serviceLists } from '../constants'

const OurService = () => {
    return (
        <section className='min-h-screen bg-white-to-blue pt-10 pb-20'>
            <h2 className='text-4xl font-semibold text-black text-start lg:px-20 md:px-14 px-12 pb-5'>Our Service</h2>
            <div className='lg:px-16 md:px-10 px-8 flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5'>
                    {serviceLists.map((item, index) => (
                        <div key={index} className='hover:shadow-2xl hover:rounded-lg hover:px-5 hover:pb-6 transition-all cursor-zoom-in'>
                            <img src={item.icon} alt="icon" width={60} />
                            <p className='font-semibold pt-5 pb-2'>{item.title}</p>
                            <p className='leading-8 text-justify md:w-10/12 w-full'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurService