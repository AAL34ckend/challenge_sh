import React from 'react'
import { appstore, logo, playstore } from '../utils'
import { footLists, socialMedia } from '../constants'

const Footer = () => {
    return (
        <footer className='bg-primary lg:px-16 md:px-10 px-5 py-10' >
            <div className='flex justify-between flex-wrap items-start'>
                <div className='flex flex-col'>
                    <img src={logo} alt='logo' width={90} />
                    <div className='lg:flex gap-5 py-8'>
                        {footLists.map((item, i) => (
                            <div key={i} >
                                <span className='text-white'>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className='md:flex gap-5 cursor-pointer hidden sm:flex items-center'>
                        {socialMedia.map((item, i) => (
                            <div key={i}>
                                <img src={item} width={20} alt='icon media social' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-white'>Join our mailing list</p>
                    <div className="flex space-x-4 py-6 relative">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="absolute right-0 px-6 py-2 bg-purple-300 text-black font-semibold rounded-lg shadow-lg hover:bg-purple-400 transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                    <div className='flex space-x-4 cursor-pointer'>
                        <img src={playstore} width={100} alt='playstore' />
                        <img src={appstore} width={100} alt='appstore' />
                    </div>
                    <div className='md:hidden flex gap-5 cursor-pointer sm:hidden mt-6 items-center'>
                        {socialMedia.map((item, i) => (
                            <div key={i}>
                                <img src={item} width={20} alt='icon media social' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer