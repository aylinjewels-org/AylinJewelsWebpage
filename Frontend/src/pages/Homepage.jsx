import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import NewIn from '../components/NewIn'
import Collections from '../components/Collections'
import Bestsellers from '../components/Bestsellers'
import Process from '../components/Process'
import GiftSection from '../components/GiftSection'
import Newsletter from '../components/Newsletter'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <div className="topbanner h-4 md:h-5 w-full bg-darkPrimary flex items-center justify-center">
        <p className='font-source-3 text-xs md:text-sm text-lightPrimary'>Unbox Your Confidence. Elevate Your Everyday.</p>
      </div>
      <NavBar />

      <div className="heroSection">
        <Hero />
      </div>

      <div className="newInSection">
        <NewIn />
      </div>

      <div className="collectionsSection">
        <Collections />
      </div>

      <div className="bestsellersSection">
        <Bestsellers />
      </div>

      <div className="processSection">
        <Process />
      </div>

      <div className="giftSection">
        <GiftSection />
      </div>

      <div className="newsletterSection">
        <Newsletter />
      </div>

      <div className="instagramSection">
        <Instagram />
      </div>

      <Footer />
    </div>
  )
}

export default Homepage