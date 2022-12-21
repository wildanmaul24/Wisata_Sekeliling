import React from 'react'
import "../../style/Categ.css";
// import { Link } from 'react-router-dom';
import DeafultTab from '../Tabs/DeafultTab';
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", color: "#00ddff" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", color: "#00ddff" }}
//             onClick={onClick}
//         />
//     );
// }

const HotelRecomended = () => {
    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     responsive: [
    //         {
    //             breakpoint: 1285,
    //             settings: {
    //                 slidesToShow: 4,
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
        <section className='hidden md:block bg-[#F4F5F6] mx-8 rounded-[24px] px-8 lg:px-16 py-8 mt-3 h-[100%]'>
            <div className='w-full mb-10'>
                <div className='flex flex-col gap-5 max-w-lg'>
                    <span className='font-semibold font-poppins text-4xl'>Find the best Hotels</span>
                    <p className='font-medium font-poppins text-lg'>Ceritanya ini teh deskripsi, cukup lorem ipsum dulu ajah lah yah isinya mah. Belum mikirin ini duh pusing</p>
                </div>
            </div>

            <DeafultTab />

            {/* <div className='grid grid-cols-1 justify-items-center content-end h-full mt-10'>
                <div className='w-[100%] flex px-8 justify-center'>
                    <div className='max-w-full mx-auto'>
                        <Slider {...settings}>
                            <div className='w-[100%] flex justify-center'>
                                <div className='flex justify-center'>
                                    <HotelCard />
                                </div>
                        </Slider>
                    </div>
                </div>
            </div> */}

        </section>
    )
}

export default HotelRecomended