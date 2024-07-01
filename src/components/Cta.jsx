import React, { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { photoImage } from '../utils';
import { gsap } from 'gsap/gsap-core';
const Cta = () => {
    const arrowRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(arrowRef.current, {
            x: 20,
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                gsap.set(arrowRef.current, { x: -20, opacity: 0 });
                gsap.to(arrowRef.current, { x: 0, opacity: 1, duration: 0.3 });
            }
        });

        gsap.to(textRef.current, {
            x: 20,
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                gsap.set(textRef.current, { x: -20, opacity: 0 });
                gsap.to(textRef.current, { x: 0, opacity: 1, duration: 0.3 });
            }
        });
    };
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
        <section className='w-full pt-20'>
            <div className='flex flex-col md:flex-row justify-between items-center md:px-16 px-8'>
                <div className='w-full md:w-2/6 sm:2/6' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <img src={photoImage} alt="Budgeting Tool" className='w-full h-full object-cover hover:drop-shadow-2xl' />
                </div>
                <div className='text-left md:w-1/2 w-full mb-8 lg:mb-0'>
                    <h2 className='text-xl lg:text-4xl font-semibold text-black'>
                        Finances, made easy.
                        Track, manage & reach
                        your financial goals.
                    </h2>
                    <p className='text-black text-base lg:text-lg py-6 leading-8 text-justify'>
                        Designed to help you take control of your finances and
                        achieve your financial goals. Our app is easy to use and
                        provides a complete overview of your finances, allowing
                        you to manage your money with confidence.
                    </p>
                    <button
                        className='bg-secondary text-primary px-4 py-2 rounded inline-flex items-center overflow-hidden'
                        onMouseEnter={handleMouseEnter}
                    >
                        <span ref={textRef}>Get Started</span>
                        <span ref={arrowRef}>
                            <FaArrowRight className='ml-2' />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cta