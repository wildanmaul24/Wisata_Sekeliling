import React from 'react'
import Slider from "react-slick";
import "../../style/Categ.css";
// import { Link } from 'react-router-dom';
import TravelGuideCard from '../TravelGuideCard';

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

const TravelGuide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1285,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true
                }
            },
        ]
    };

    return (
        <section className='hidden md:block px-8 lg:px-16 pt-3 pb-16 mt-3 h-[100%]'>
            <div className='grid grid-cols-1 justify-items-center content-end h-full'>
                <h1 className='font-semibold font-poppins text-[48px] text-center'>Adventure at this town</h1>
                <h2 className='font-normal font-poppins text-[24px] text-center'>Go traveling at exotic city</h2>
                <div className='w-[100%] flex px-8 justify-center'>
                    <div className='max-w-full mx-auto'>
                        <Slider {...settings}>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <TravelGuideCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <TravelGuideCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <TravelGuideCard />
                                </div>
                            </div>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <TravelGuideCard />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelGuide