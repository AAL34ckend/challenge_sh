import React, { useRef } from 'react';
import { cardImage } from '../utils';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ReactTyped } from 'react-typed';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
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

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    })
    return (
        <section className='bg-primary w-full nav-height relative py-28'>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:px-16 md:px-14 sm:px-10 px-8'>
                <div className='text-left mb-8 lg:mb-0 lg:w-2/5'>
                    <h2 className='text-4xl lg:text-5xl md:text-5xl sm:text-5xl font-semibold text-white'>
                        {" "}
                        <ReactTyped
                            strings={["Your one stop Budgeting tool"]}
                            typeSpeed={100}
                            showCursor={false}
                        />
                    </h2>
                    <p className='text-white text-base lg:text-lg py-6 leading-loose text-justify'>
                        A budget is a plan for every dollar you have. It’s not magic,
                        but it represents more financial freedom and a life with much
                        less stress. A budget is a plan.
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
                <div className='w-full lg:w-2/5' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <img src={cardImage} alt="Budgeting Tool" className='w-full h-full object-cover drop-shadow-2xl' />
                </div>
            </div>
            <div
                ref={ref}
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-md px-6 py-5 flex justify-around w-11/12 -mb-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='text-center'>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold'>
                        {inView && <CountUp start={0} end={10000} duration={2} separator="," />}
                    </span>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-secondary'>+</span>
                    <p className='text-xs lg:text-md md:text-sm sm:text-xs'>Active users</p>
                </div>
                <div className='text-center'>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold'>
                        {inView && <CountUp start={0} end={2000000} duration={2} prefix="$" separator="," />}
                    </span>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-secondary'>+</span>
                    <p className='text-xs lg:text-md md:text-sm sm:text-xs'>Transaction</p>
                </div>
                <div className='text-center'>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold'>
                        {inView && <CountUp start={0} end={70} duration={2} />}
                    </span>
                    <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-secondary'>+</span>
                    <p className='text-xs lg:text-md md:text-sm sm:text-xs'>Countries</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
