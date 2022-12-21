import React from 'react'
import Slider from "react-slick";
import "../../style/Categ.css";
// import { Link } from 'react-router-dom';
import VenueCard from '../VenueCard';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "#00ddff" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "#00ddff" }}
            onClick={onClick}
        />
    );
}

const VenueRecomended = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1285,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
        ]
    };

    return (
        <section className='hidden md:block px-8 lg:px-16 pt-3 pb-16 mt-3 h-[100%]'>
            <div className='grid grid-cols-1 justify-items-center content-end h-full'>
                <span className='font-semibold font-poppins text-4xl text-center mb-5'>Venue Recomended</span>
                <div className='w-[100%] flex px-8 justify-center'>
                    <div className='max-w-full mx-auto'>
                        <Slider {...settings}>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <VenueCard />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VenueRecomended