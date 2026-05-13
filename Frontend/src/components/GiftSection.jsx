import React from 'react';
import { motion } from 'motion/react';

const GiftSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[4/3] md:aspect-[16/7] bg-[#fefefe] border border-darkSecondary/10 overflow-hidden group shadow-sm"
      >
        {/* The baked image scales to fill the constant box size */}
        <img src="../public/homepage/gift.jpg" alt="Surprise a Loved One" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />


        {/* Button Overlay */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10">
          <button className="bg-darkPrimary text-lightPrimary px-8 md:px-12 py-3 md:py-4 text-[11px] md:text-[12px] uppercase tracking-[2px] font-source-3 hover:bg-darkSecondary transition-colors shadow-lg">
            See Offers
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftSection;
