import React, { useState } from 'react';
import { navLists } from '../constants';
import { logo } from '../utils';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='fixed top-0 left-0 z-10 w-full py-5 sm:px-10 lg:px-16 md:px-14 px-8 flex justify-between items-center bg-primary :relative'>
            <nav className='flex w-full items-center justify-between'>
                <img src={logo} alt="logo" width={100} height={20} />
                <div className="hidden md:flex justify-center items-center">
                    {navLists.map((nav) => (
                        <Link
                            key={nav}
                            to={nav.toLowerCase().replace(' ', '-')}
                            smooth={true}
                            duration={500}
                            className="px-5 text-md cursor-pointer text-white transition-all"
                            activeClass='active'
                            spy={true}
                        >
                            {nav}
                        </Link>
                    ))}
                    <button className='btn bg-secondary text-primary px-4 py-1 rounded ml-4'>Sign in</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

            <div className={`fixed top-0 right-0 h-full bg-primary w-64 z-20 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleMenu} className='absolute top-4 right-4 text-white focus:outline-none'>
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
                <nav className='mt-16'>
                    <ul className='flex flex-col items-start space-y-6 px-4'>
                        {navLists.map((nav) => (
                            <Link
                                key={nav}
                                to={nav.toLowerCase().replace(' ', '-')}
                                smooth={true}
                                duration={500}
                                className="w-full px-5 py-2 text-left text-md cursor-pointer text-white hover:text-secondary transition-all hover:bg-purple-900"
                                activeClass="active" // Tambahkan activeClass
                                spy={true} // Tambahkan spy
                            >
                                {nav}
                            </Link>
                        ))}
                        <li className='w-full'>
                            <button className='btn bg-secondary text-primary px-4 py-3 rounded w-full text-left'>Sign in</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Navbar;
