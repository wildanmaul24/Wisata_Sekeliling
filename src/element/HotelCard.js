import React from 'react'
import { Link } from 'react-router-dom'
import HotelPict from '../Image/Hotel.jpg'

const HotelCard = () => {
    return (
        <div className='w-[40%] lg:w-[300px] bg-white my-6 rounded-[24px] drop-shadow-lg'>
            <img className='rounded-t-[24px] md:h-[12.5rem] lg:h-[13<rem] xl:[15rem] w-full h-full' src={HotelPict} alt="Hotel" />
            <div className='px-4 py-3'>
                <div className=' flex justify-between items-center'>
                    <div className='flex flex-1 flex-col justify-center'>
                        <h1 className='font-poppins font-medium text-[16px]'>Valore Hotel</h1>
                        <h2 className='font-poppins font-normal text-[12px] inline-flex items-center gap-1'>
                            <svg width="13" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8.5C12 10.1569 10.6569 11.5 9 11.5C7.34315 11.5 6 10.1569 6 8.5C6 6.84315 7.34315 5.5 9 5.5C10.6569 5.5 12 6.84315 12 8.5Z" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 8.5C16.5 15.6421 9 19.75 9 19.75C9 19.75 1.5 15.6421 1.5 8.5C1.5 4.35786 4.85786 1 9 1C13.1421 1 16.5 4.35786 16.5 8.5Z" stroke="#777E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Cimahi
                        </h2>
                    </div>
                    <div className='inline-flex items-center justify-center gap-1 border-2 border-[#58C27D] font-poppins font-medium px-2 py-3 rounded-[4px]'>
                        <span className='font-poppins font-bold text-[12px] text-[#58C27D]'>$400</span>
                    </div>
                </div>
                <div className='flex flex-1 gap-2 w-auto h-auto mt-5'>
                    <span className='font-poppins font-normal text-[12px] inline-flex gap-1 items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.00016 14.6667C4.36835 14.6667 4.66683 14.3682 4.66683 14H3.3335C3.3335 14.3682 3.63197 14.6667 4.00016 14.6667Z" fill="#777E91" />
                            <path d="M12.0002 14.6667C12.3684 14.6667 12.6668 14.3682 12.6668 14H11.3335C11.3335 14.3682 11.632 14.6667 12.0002 14.6667Z" fill="#777E91" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.6668 8.66665H3.3335C2.96531 8.66665 2.66683 8.96512 2.66683 9.33331V12C2.66683 12.3682 2.96531 12.6666 3.3335 12.6666H12.6668C13.035 12.6666 13.3335 12.3682 13.3335 12V9.33331C13.3335 8.96512 13.035 8.66665 12.6668 8.66665ZM3.3335 7.33331C2.22893 7.33331 1.3335 8.22874 1.3335 9.33331V12C1.3335 13.1045 2.22893 14 3.3335 14H12.6668C13.7714 14 14.6668 13.1045 14.6668 12V9.33331C14.6668 8.22874 13.7714 7.33331 12.6668 7.33331H3.3335Z" fill="#777E91" />
                            <path d="M11.3333 1.33331C10.9651 1.33331 10.6667 1.63179 10.6667 1.99998V7.33331H12V1.99998C12 1.63179 11.7015 1.33331 11.3333 1.33331Z" fill="#777E91" />
                            <path d="M4.66667 3.99998C4.29848 3.99998 4 4.29846 4 4.66665V7.33331H5.33333V4.66665C5.33333 4.29846 5.03486 3.99998 4.66667 3.99998Z" fill="#777E91" />
                            <path d="M4.66667 10C4.29848 10 4 10.2985 4 10.6667C4 11.0349 4.29848 11.3333 4.66667 11.3333C5.03486 11.3333 5.33333 11.0349 5.33333 10.6667C5.33333 10.2985 5.03486 10 4.66667 10Z" fill="#777E91" />
                            <path d="M7.33333 10C6.96514 10 6.66667 10.2985 6.66667 10.6667C6.66667 11.0349 6.96514 11.3333 7.33333 11.3333H11.3333C11.7015 11.3333 12 11.0349 12 10.6667C12 10.2985 11.7015 10 11.3333 10H7.33333Z" fill="#777E91" />
                        </svg>
                        Free Wifi
                    </span>
                    <span className='font-poppins font-normal text-[12px] inline-flex gap-1 items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.3335 6.66667C1.3335 4.08934 3.42283 2 6.00016 2H10.0002C12.5775 2 14.6668 4.08934 14.6668 6.66667C14.6668 7.77124 13.7714 8.66667 12.6668 8.66667H3.3335C2.22893 8.66667 1.3335 7.77124 1.3335 6.66667ZM6.00016 3.33333H10.0002C11.8411 3.33333 13.3335 4.82572 13.3335 6.66667C13.3335 7.03486 13.035 7.33333 12.6668 7.33333H3.3335C2.96531 7.33333 2.66683 7.03486 2.66683 6.66667C2.66683 4.82572 4.15921 3.33333 6.00016 3.33333Z" fill="#777E91" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6668 12C14.6668 13.1046 13.7714 14 12.6668 14H3.3335C2.22893 14 1.3335 13.1046 1.3335 12C1.3335 10.8954 2.22893 10 3.3335 10H12.6668C13.7714 10 14.6668 10.8954 14.6668 12ZM12.6668 12.6667H3.3335C2.96531 12.6667 2.66683 12.3682 2.66683 12C2.66683 11.6318 2.96531 11.3333 3.3335 11.3333H12.6668C13.035 11.3333 13.3335 11.6318 13.3335 12C13.3335 12.3682 13.035 12.6667 12.6668 12.6667Z" fill="#777E91" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.3332 8.66665H2.6665C2.29831 8.66665 1.99984 8.96512 1.99984 9.33331C1.99984 9.7015 2.29831 9.99998 2.6665 9.99998H13.3332C13.7014 9.99998 13.9998 9.7015 13.9998 9.33331C13.9998 8.96512 13.7014 8.66665 13.3332 8.66665ZM2.6665 7.33331C1.56193 7.33331 0.666504 8.22874 0.666504 9.33331C0.666504 10.4379 1.56193 11.3333 2.6665 11.3333H13.3332C14.4377 11.3333 15.3332 10.4379 15.3332 9.33331C15.3332 8.22874 14.4377 7.33331 13.3332 7.33331H2.6665Z" fill="#777E91" />
                            <path d="M5.99984 5.33335C5.99984 5.70154 5.70136 6.00002 5.33317 6.00002C4.96498 6.00002 4.6665 5.70154 4.6665 5.33335C4.6665 4.96516 4.96498 4.66669 5.33317 4.66669C5.70136 4.66669 5.99984 4.96516 5.99984 5.33335Z" fill="#777E91" />
                            <path d="M8.6665 5.33335C8.6665 5.70154 8.36803 6.00002 7.99984 6.00002C7.63165 6.00002 7.33317 5.70154 7.33317 5.33335C7.33317 4.96516 7.63165 4.66669 7.99984 4.66669C8.36803 4.66669 8.6665 4.96516 8.6665 5.33335Z" fill="#777E91" />
                            <path d="M10.6665 6.00002C11.0347 6.00002 11.3332 5.70154 11.3332 5.33335C11.3332 4.96516 11.0347 4.66669 10.6665 4.66669C10.2983 4.66669 9.99984 4.96516 9.99984 5.33335C9.99984 5.70154 10.2983 6.00002 10.6665 6.00002Z" fill="#777E91" />
                        </svg>
                        Breakfast Include
                    </span>
                </div>
                <div className='text-xs flex justify-between items-center mt-5 border-t-[1px] border-solid border-[#E6E8EC] py-3'>
                    <Link to='' className='font-poppins font-bold text-[12px] text-sky-500'>See all feature's</Link>
                    <div className='flex items-center justify-center gap-2 font-poppins font-medium px-1 py-1 rounded-lg'>
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0968 6.97508C9.72239 7.38795 9.47735 8.18798 9.55132 8.75192L9.88967 11.2991C9.96439 11.8635 9.62376 12.1245 9.13255 11.8801L6.91315 10.7743C6.42193 10.5292 5.62043 10.5327 5.13035 10.7815L2.92044 11.9054C2.43074 12.1541 2.08859 11.8951 2.15915 11.3312L2.47891 8.78079C2.54947 8.21645 2.29874 7.41879 1.92131 7.00869L0.216654 5.15474C-0.161147 4.74464 -0.0317994 4.32346 0.50304 4.21945L2.9193 3.74964C3.45414 3.64563 4.10126 3.14932 4.35806 2.64668L5.51536 0.377872C5.7714 -0.124768 6.19396 -0.125955 6.45342 0.374313L7.62741 2.63362C7.88762 3.13389 8.53777 3.62506 9.07413 3.72433L11.4934 4.17556C12.029 4.27521 12.1614 4.6952 11.787 5.10847L10.0968 6.97508Z" fill="#FFD166" />
                        </svg>
                        <div className='w-full mt-[3px] flex flex-1 gap-1'>
                            <span className='font-poppins font-semibold text-[16px]'>4.8</span>
                            <span className='text-[#777E90] font-poppins font-normal text-[12px]'>(29 Views)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard