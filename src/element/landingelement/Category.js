import React, { Component } from 'react';
import BeachIcon from "../../Image/Beach.png";
import CampIcon from "../../Image/Camp.png";
import RiverIcon from "../../Image/River.png";
import Slider from "react-slick";
import "../../style/Categ.css";
import { Link } from 'react-router-dom';

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

class Category extends Component {
    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const icons = [
            { src: BeachIcon }, { src: CampIcon }, { src: RiverIcon }, { src: BeachIcon }, { src: BeachIcon }, { src: BeachIcon }, { src: BeachIcon }, { src: BeachIcon }, { src: BeachIcon },
        ]

        return (
            <section className='hidden md:block px-8 lg:px-16 pt-16 pb-16 h-[100%]'>
                <div className='w-full flex justify-center'>
                    <div className='flex flex-col gap-5 items-center text-center max-w-lg'>
                        <span className='font-semibold font-poppins text-4xl'>Let’s go on an adventure</span>
                        <p className='font-medium font-poppins text-lg'>Ceritanya ini teh deskripsi, cukup lorem ipsum dulu ajah lah yah isinya mah. Belum mikirin ini duh pusing</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 justify-items-center content-end h-full mt-10'>
                    <div className='w-[85vw] flex px-8 justify-center'>
                        <div className='max-w-full mx-auto'>
                            <Slider {...settings}>
                                {icons.map((icon) => {
                                    return (
                                        <div key={icon} className='container'>
                                            <div className='w-full lg:max-w-[300px] h-auto mx-auto flex justify-center gap-4 py-2'>
                                                <Link to='' className='w-[100px] h-[100px]'>
                                                    <img src={icon.src} alt="iconCategory" className='w-[100%] h-[100%]' />
                                                </Link>
                                                <div className='flex flex-1 flex-col justify-center gap-2'>
                                                    <span className='text-[16px] font-poppins font-medium leading-normal'>Luxury Resort at <br className='sm:block hidden' />the sea</span>
                                                    <div className="badge badge-lg py-1 px-2 bg-[#E6E8EC] border-none font-bold font-poppins text-black text-[12px]">1,234 PLACES</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;
