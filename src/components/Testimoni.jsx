import React from 'react'
import { testimonialLists } from '../constants'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css"

const Testimoni = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Tampilkan 3 item secara default
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Layar di bawah 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // Layar di bawah 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600, // Layar di bawah 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <section className="w-full px-8 lg:px-20 md:px-16 sm:px-10 py-10 bg-white-to-blue">
            <div className="justify-center flex font-semibold text-center">See what our customers have to say</div>
            <Slider {...settings}>
                {testimonialLists.map((testimonial) => (
                    <div key={testimonial.id} className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                            <p className="lg:text-lg md:text-md text-xs font-semibold mb-2">{testimonial.title}</p>
                            <p className="text-justify md:text-md sm:text-sm text-xs">{testimonial.text}</p>
                            <div className="flex flex-row sm:flex-row justify-between items-start mt-4">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <img src={testimonial.photo} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold sm:text-sm text-xs">{testimonial.name}</p>
                                        <p className="sm:text-sm text-xs text-gray-600">{testimonial.address}</p>
                                    </div>
                                </div>
                                <div className="flex mt-2 sm:mt-0">
                                    {Array(testimonial.rating)
                                        .fill()
                                        .map((_, i) => (
                                            <span key={i} className="text-secondary">★</span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Testimoni