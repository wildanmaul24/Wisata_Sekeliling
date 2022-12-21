import React from 'react'

const VenueCard = () => {
    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[90%] bg-white my-6 rounded-lg relative drop-shadow-lg'>
            <img className='rounded-t-lg md:h-[12.5rem] lg:h-[13<rem] xl:[15rem] w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAImt9kGw8-gpeWAYfB8AgClVXoYB1nOBjlA&usqp=CAU" alt="" />
            <div className='px-4 py-3'>
                <div className=' my-2 absolute top-0 text-white'>
                    <h1 className='text-sm lg:text-lg font-medium font-poppins'>Gunung Sumbing</h1>
                    <span className='text-xs font-poppins'>Jawa Tengah, Indonesia</span>
                </div>
                <div className='text-justify flex flex-col'>
                    <span className='text-sm lg:text-xs tracking-normal font-normal truncate lg:overflow-visible lg:text-clip lg:whitespace-normal font-poppins'>Gunung Sumbing adalah gunung api yang terdapat di Jawa Tengah, Indonesia., gunung Sumbing merupakan gunung
                        tertinggi ketiga di Pulau Jawa setelah Gunung Semeru dan Gunung Slamet.</span>
                    <button className='text-center text-white font-normal text-xs lg:text-sm bg-sky-500 w-20 mt-4 py-1 rounded-lg hover:bg-sky-600 font-poppins'>Book Now</button>
                </div>
                <div className='text-xs flex justify-between items-center mt-5'>
                    <span className='font-poppins'>4,8/5 Review</span>
                    <button className='inline-flex items-center gap-1 font-poppins font-medium hover:bg-sky-100 px-1 py-1 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 fill-sky-500' viewBox="0 0 512 512">
                            <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VenueCard