import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[minmax(650px,1fr)_1fr]">
      {/* Left Column */}
      <div className="relative h-[70vh] md:h-[80vh] bg-darkSecondary/20 overflow-hidden flex items-end">
        <img src="/homepage/HeroSection-img (1).jpg" alt="Hero Left" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Dark overlay to make white text readable */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Text Overlay */}
        <div className="relative z-20 pb-16 pl-8 md:pl-12 pr-8 text-lightPrimary max-w-[600px]">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] tracking-[3px] uppercase mb-4 font-source-3"
          >
            Crafting Your Daily Aura
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[32px] md:text-[42px] leading-[40px] md:leading-[50px] font-source-4 mb-6 md:max-w-[550px]"
          >
            Sterling Silver Designed For Your Unique Everyday Story
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-lightPrimary px-6 py-2 text-[11px] tracking-[2px] uppercase font-source-3 hover:bg-lightPrimary hover:text-darkPrimary transition-colors duration-300"
          >
            Shop Now
          </motion.button>
          

        </div>
      </div>

      {/* Right Column */}
      <div className="h-[50vh] md:h-[80vh] bg-darkSecondary/10 relative overflow-hidden">
        <img src="/homepage/HeroSection-img (2).jpg" alt="Hero Right" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
