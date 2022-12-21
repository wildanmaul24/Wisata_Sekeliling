import React from 'react'

const VacationCard = () => {
    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[150px] bg-transparent my-6 rounded-[25px] drop-shadow-lg'>
            <img className='rounded-[25px] md:h-[12.5rem] lg:h-[13rem] xl:h-[150px] object-cover w-full h-full' src="https://wallpaperaccess.com/full/287855.jpg" alt="vactionimg" />
            <div className='px-4 py-3'>
                <div className='text-xs flex justify-center'>
                    <span className='font-poppins font-medium text-base text-black'>Seoul</span>
                </div>
            </div>
        </div>
    )
}

export default VacationCard