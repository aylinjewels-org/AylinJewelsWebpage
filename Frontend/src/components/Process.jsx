import React from 'react';
import { motion } from 'motion/react';

const Process = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="h-[400px] md:h-[580px] w-full bg-[#fefefe] border border-darkSecondary/10 relative overflow-hidden group order-2 md:order-1"
        >
          {/* Add image path here */}
          <img src="/homepage/aboutUs.jpg" alt="Our Process" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center text-darkSecondary/50 font-source-3 text-sm">Image Placeholder</div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-[42px] md:text-[64px] leading-[48px] md:leading-[70px] font-source-3 font-light mb-8 md:mb-10 text-darkPrimary">
            We believe<br />
            in our process
          </h2>

          <p className="text-[13px] md:text-[14px] text-darkSecondary leading-7 md:leading-8 mb-8 max-w-[450px] font-source-3">
            Sustainable sourcing meets timeless craftsmanship. Every piece is handcrafted with meticulous attention to detail, ensuring unparalleled quality and enduring elegance for every occasion.
          </p>

          <button className="border-b border-darkPrimary pb-1 text-[12px] uppercase tracking-[2px] font-source-3 text-darkPrimary hover:text-darkSecondary hover:border-darkSecondary transition-colors">
            About Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
