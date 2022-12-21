import React from 'react'

const TravelGuideCard = () => {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[80%] my-6 rounded-xl bg-transparent drop-shadow-lg'>
      <img className='rounded-2xl md:h-[12.5rem] lg:h-[13rem] xl:h-[20rem] w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAImt9kGw8-gpeWAYfB8AgClVXoYB1nOBjlA&usqp=CAU" alt="" />
        <div className=' mx-5 my-5 text-black flex justify-center'>
          <span className='text-sm font-poppins font-bold'>#Jawa Tengah</span>
        </div>
    </div>
  )
}

export default TravelGuideCard