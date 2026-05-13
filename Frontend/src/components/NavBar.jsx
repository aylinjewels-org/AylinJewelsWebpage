import React, { useState } from 'react'
import { RiSearchLine, RiHeartLine, RiShoppingBagLine, RiMenuLine, RiCloseLine } from '@remixicon/react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-lightPrimary relative z-50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-3 flex items-center justify-between">
        <div className="hidden md:block w-[210px]">
          <div className="border border-gray-300 rounded-full px-4 py-2 text-[11px] flex items-center justify-between">
            <input 
              type="text" 
              placeholder="Search for product..." 
              className="bg-transparent outline-none w-full text-darkSecondary font-source-3"
            />
            <RiSearchLine size={16} className="text-darkSecondary" />
          </div>
        </div>

        <button 
          className="md:hidden text-darkPrimary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>

        <div className="text-center absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[20px] md:text-[22px] tracking-[4px] font-bold font-source-3 uppercase text-darkPrimary">
            Aylin Jewels
          </h1>
        </div>

        <div className="flex gap-4 md:gap-5 text-darkPrimary">
          <RiHeartLine size={22} className="cursor-pointer hover:text-darkSecondary transition-colors" />
          <RiShoppingBagLine size={22} className="cursor-pointer hover:text-darkSecondary transition-colors" />
        </div>
      </div>

      <nav className={`md:block border-t border-gray-200 bg-lightPrimary ${isMenuOpen ? 'block absolute w-full shadow-lg' : 'hidden'}`}>
        <div className="max-w-[900px] mx-auto py-4 px-5 md:px-0 flex flex-col md:flex-row justify-center gap-6 md:gap-8 text-[16px] tracking-[2px] uppercase font-source-3 text-darkPrimary">
          <a href="#" className="nav-link">Rings</a>
          <a href="#" className="nav-link">Special</a>
          <a href="#" className="nav-link">Necklaces</a>
          <a href="#" className="nav-link">Engagement</a>
          <a href="#" className="nav-link">Gold Ring</a>
          <a href="#" className="nav-link">Collection</a>
          
          <div className="md:hidden mt-4 mb-2">
            <div className="border border-gray-300 rounded-full px-4 py-2 text-[11px] flex items-center justify-between">
              <input 
                type="text" 
                placeholder="Search for product..." 
                className="bg-transparent outline-none w-full text-darkSecondary font-source-3"
              />
              <RiSearchLine size={16} className="text-darkSecondary" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
