import React from 'react';
import { 
  RiTwitterXLine, 
  RiInstagramLine, 
  RiFacebookCircleLine, 
  RiPinterestLine 
} from '@remixicon/react';

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-5 md:px-10 pb-10 md:pb-16 mt-8">
      <div className="border-t border-darkSecondary/20 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
        
        {/* Social & Brand */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[18px] md:text-[20px] tracking-[4px] font-semibold text-darkPrimary font-source-3">
            AYLIN JEWELS
          </h2>
          <p className="text-[12px] md:text-[13px] text-darkSecondary font-source-3 leading-6 max-w-[250px]">
            Timeless craftsmanship designed for your everyday elegance.
          </p>
          <div className="flex gap-5 text-darkPrimary mt-2">
            <a href="#" className="hover:text-darkSecondary transition-colors"><RiTwitterXLine size={20} /></a>
            <a href="#" className="hover:text-darkSecondary transition-colors"><RiInstagramLine size={20} /></a>
            <a href="#" className="hover:text-darkSecondary transition-colors"><RiFacebookCircleLine size={20} /></a>
            <a href="#" className="hover:text-darkSecondary transition-colors"><RiPinterestLine size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="uppercase tracking-[2px] text-[11px] mb-6 font-source-3 text-darkPrimary font-semibold">
            Use Cases
          </h3>
          <ul className="space-y-4 text-[13px] text-darkSecondary font-source-3">
            <li><a href="#" className="hover:text-darkPrimary transition-colors">All Rings</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Best Selling</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Engagement</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Online Collection</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Theme Collection</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="uppercase tracking-[2px] text-[11px] mb-6 font-source-3 text-darkPrimary font-semibold">
            Explore
          </h3>
          <ul className="space-y-4 text-[13px] text-darkSecondary font-source-3">
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Today</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Promotions</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Handcrafted Jewelry</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Design Stories</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="uppercase tracking-[2px] text-[11px] mb-6 font-source-3 text-darkPrimary font-semibold">
            Resources
          </h3>
          <ul className="space-y-4 text-[13px] text-darkSecondary font-source-3">
            <li><a href="#" className="hover:text-darkPrimary transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-darkPrimary transition-colors">Return Policy</a></li>
          </ul>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-darkSecondary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-darkSecondary font-source-3">
        <p>&copy; {new Date().getFullYear()} Aylin Jewels. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-[1px]">
          <a href="#" className="hover:text-darkPrimary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-darkPrimary transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
