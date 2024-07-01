import React from 'react'
import { benefitLists } from '../constants'
import { photo2Image } from '../utils'
import { gsap } from 'gsap'

const Benefit = () => {
    const handleMouseMove = (event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const xPercent = (event.clientX - left) / width;
        const yPercent = (event.clientY - top) / height;

        gsap.to(event.currentTarget, {
            duration: 0.3,
            rotationX: ((0.5 - yPercent) * 30),
            rotationY: ((xPercent - 0.5) * 30),
            ease: "power2.out",
            transformPerspective: 1000
        });
    };

    const handleMouseLeave = (event) => {
        gsap.to(event.currentTarget, {
            duration: 0.3,
            rotationX: 0,
            rotationY: 0,
            ease: "power2.out",
            transformPerspective: 1000
        });
    };
    return (
        <section className='w-full py-10 flex items-center md:justify-between justify-around lg:px-16 md:px-10 px-8'>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='hidden lg:inline w-full md:w-2/6 sm:2/6'>
                <img src={photo2Image} className='w-full h-full object-cover' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <h2 className='text-4xl font-semibold text-black text-start pb-5'>Benefit</h2>
                <p className='text-justify py-4'>Designed to help you take control of your finances and achieve your financial goals. Our app is easy to use and provides a complete overview of your finances, allowing you to manage your money with confidence.</p>
                <div>
                    {benefitLists.map((item, index) => (
                        <ul key={index}>
                            <li className='flex gap-2 my-2'>
                                <img src={item.icon} alt='icon' width={25} />
                                <span>{item.text}</span>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefit