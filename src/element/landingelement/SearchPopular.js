import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

const SearchPopular = () => {
    const settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true,
        pauseOnHover: false
    }

    const imgSlide = [
        { index: 1, src: "https://jaytranstour.com/wp-content/uploads/2022/04/10.-Foto-Estetik-Dengan-Pilihan-Wisata-Bali-Terpopuler-scaled.jpg", alt: 'wisatasrc' },
        { index: 2, src: "https://ongistravel.com/wp-content/uploads/2014/06/img_paket-wisata-malang-batu-bromo.jpg", alt: 'wisatasrc' },
        { index: 3, src: "https://wallpaperaccess.com/full/1961851.jpg", alt: 'wisatasrc' },
        { index: 4, src: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/21/2863741132.jpg", alt: 'wisatasrc' },
    ]

    const badges = [
        { number: "Lotus Temple" }, { number: "Coblestone" }, { number: "Mirage" }, { number: "Inferno" }, { number: "Overpass" }, { number: "Hotel Cimahi" }, { number: "Santolo" }, { number: "Pantai Pangandaran" }, { number: "Bandoeng" }, { number: "Dago" }, { number: "Sudirman Street" }, { number: "Candi Borobudur" },
    ]
    return (
        <>
            <section className='hidden md:block'>
                <div className='grid grid-cols-1 justify-items-center place-content-center'>
                    <div className='w-full px-8 relative flex justify-center'>
                        <div className='max-w-full mx-auto py-4'>
                            <Slider {...settings}>
                                {imgSlide.map((imgSlider) => {
                                    return (
                                        <div key={imgSlider.index} className='h-[550px] lg:h-[600px] 2xl:h-[750px]'>
                                            <img src={imgSlider.src} alt={imgSlider.alt} className='w-full h-full pointer-events-none rounded-3xl object-fill brightness-[.8]' />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                        <div className='absolute top-[40%] w-[80vw] justify-center items-center text-center flex flex-col gap-5'>
                            <span className='font-semibold font-poppins text-4xl 2xl:text-5xl text-gray-100 select-none '>Liburan Akhir Tahun Menunggumu!</span>
                            <p className='font-normal font-poppins text-xl text-gray-100 select-none '>Ceritanya ini teh deskripsi, cukup lorem ipsum dulu ajah lah yah isinya mah. Belum mikirin ini duh pusing</p>
                        </div>
                    </div>
                    <form action='' className='padding-search z-[10] flex items-center justify-center'>
                        <div className='relative flex items-center w-[70%] lg:w-[75%]'>
                            <button className='absolute right-0 mr-10 px-2 py-2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#3B71FE] hover:bg-[#2e5aca] z-[10]'>
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 stroke-white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                            <input type={'search'} placeholder='Search Here...' name='search' id='search' className='searchBox text-[18px] w-[100%] h-[10vh] rounded-[24px] py-4 pl-10 pr-24 outline-none bg-[#ffffffb4] placeholder-slate-500 focus:border-sky-500 focus:border-2' autoComplete='off' />
                        </div>
                    </form>
                    <div className='flex flex-col items-center justify-center gap-5 w-full pb-4 mt-12'>
                        <span className='font-medium font-poppins text-2xl'>Popular Search</span>
                        <div className='flex justify-center flex-wrap gap-2 px-8'>
                            {badges.map((badge, index) => {
                                return (
                                    <Link to='' key={index} className="badge badge-lg py-4 px-3 bg-transparent font-medium font-poppins text-lg text-sky-500 hover:border hover:border-sky-500">{badge.number}</Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchPopular