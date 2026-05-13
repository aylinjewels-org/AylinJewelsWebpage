import React from 'react';
import { motion } from 'motion/react';

const Collections = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <h2 className="text-[36px] md:text-[52px] font-source-3 font-light text-darkPrimary">
          COLLECTIONS
        </h2>

        <a href="#" className="text-[11px] uppercase tracking-[2px] text-darkPrimary hover:text-darkSecondary transition-colors pb-2 border-b border-transparent hover:border-darkSecondary hidden sm:block">
          Shop Collection
        </a>
      </div>

      {/* Row 1 - Image Left, Text Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-20 md:mb-28">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-square bg-darkSecondary/10 relative overflow-hidden group"
        >
          {/* Add image here */}
          <img src="../public/homepage/collection_section (2).jpg" alt="Everyday Wear Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[42px] font-source-3 font-light mb-5 text-darkPrimary">
            EVERYDAY WARE
          </h3>

          <p className="text-[13px] md:text-[14px] text-darkSecondary leading-7 mb-8 max-w-[420px] font-source-3">
            Embrace minimalist jewelry meticulously crafted for daily elegance and timeless beauty. Discover our handcrafted, delicate pieces purposefully designed to elevate your everyday style, ensuring you shine effortlessly from morning to night.
          </p>

          <button className="border-b border-darkPrimary pb-1 text-[12px] uppercase tracking-[2px] font-source-3 text-darkPrimary hover:text-darkSecondary hover:border-darkSecondary transition-colors">
            Shop
          </button>
        </motion.div>
      </div>

      {/* Row 2 - Text Left, Image Right (Stacks Image Top on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
        {/* Mobile orders text second, Desktop orders text first */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <h3 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[42px] font-source-3 font-light mb-5 text-darkPrimary">
            OCCASIONAL
          </h3>

          <p className="text-[13px] md:text-[14px] text-darkSecondary leading-7 mb-8 max-w-[420px] font-source-3">
            Make every milestone unforgettable with our elegant statement pieces. Expertly designed for grand celebrations, weddings, and anniversaries, this breathtaking collection guarantees you will capture every eye in the room.
          </p>

          <button className="border-b border-darkPrimary pb-1 text-[12px] uppercase tracking-[2px] font-source-3 text-darkPrimary hover:text-darkSecondary hover:border-darkSecondary transition-colors">
            Shop
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 w-full aspect-square bg-darkSecondary/10 relative overflow-hidden group"
        >
          {/* Add image here */}
          <img src="../public/homepage/collection_section (1).jpg" alt="Occasional Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
      </div>
      
      {/* Mobile Shop Collection Link */}
      <div className="mt-12 text-center sm:hidden">
        <a href="#" className="text-[11px] uppercase tracking-[2px] text-darkPrimary hover:text-darkSecondary transition-colors pb-2 border-b border-darkPrimary hover:border-darkSecondary">
          Shop All Collections
        </a>
      </div>

    </section>
  );
};

export default Collections;
