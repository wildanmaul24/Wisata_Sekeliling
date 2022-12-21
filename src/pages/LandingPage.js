import React from 'react'
import Category from '../element/landingelement/Category'
import HotelRecomended from '../element/landingelement/HotelRecomended'
import SearchPopular from '../element/landingelement/SearchPopular'
import TravelGuide from '../element/landingelement/TravelGuide'
import Vacation from '../element/landingelement/Vacation'
import VenueRecomended from '../element/landingelement/VenueRecomended'
import Navbar from '../element/Navbar'

const LandingPage = () => {

  return (
    <>
      <Navbar />
      <main className='mt-20'>
        <SearchPopular />
        <Category />
        <Vacation />
        <HotelRecomended />
        <TravelGuide />
        <VenueRecomended />
      </main>
    </>
  )
}

export default LandingPage