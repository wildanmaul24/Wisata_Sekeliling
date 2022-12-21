import React from 'react'
import Slider from "react-slick";
import "../../style/Categ.css";
// import { Link } from 'react-router-dom';
import VacationCard from '../VacationCard';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "none", color: "#00ddff" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "none", color: "#00ddff" }}
//             onClick={onClick}
//         />
//     );
// }

const Vacation = () => {
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 8,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     responsive: [
    //         {
    //             breakpoint: 1285,
    //             settings: {
    //                 slidesToShow: 6,
    //                 slidesToScroll: 2,
    //                 infinite: false,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: false,
    //                 dots: true
    //             }
    //         },
    //     ]
    // };

    return (
        <section className='hidden md:block px-8 lg:px-16 pt-3 pb-16 mt-3 h-[100%]'>
            <div className='w-full flex justify-center'>
                <div className='flex flex-col items-center text-center gap-5 max-w-lg'>
                    <span className='font-semibold font-poppins text-4xl'>Vacation Recomended</span>
                    <p className='font-medium font-poppins text-lg'>Ceritanya ini teh deskripsi, cukup lorem ipsum dulu ajah lah yah isinya mah. Belum mikirin ini duh pusing</p>
                </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center content-end h-full mt-10'>
                <div className='w-[100%] flex px-8 justify-center'>
                    <div className='max-w-full mx-auto flex gap-8 flex-1 flex-wrap lg:flex-nowrap'>
                        {/* <Slider {...settings}> */}
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='flex justify-center cursor-pointer'>
                                <VacationCard />
                            </div>
                        </div>
                        {/* </Slider> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vacation