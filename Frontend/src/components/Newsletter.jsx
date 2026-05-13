import React from 'react';
import { motion } from 'motion/react';

const Newsletter = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 text-center border-t border-darkSecondary/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[600px] mx-auto"
      >
        <h2 className="text-[28px] md:text-[34px] leading-[36px] md:leading-[44px] font-source-3 font-light mb-8 md:mb-10 text-darkPrimary">
          SUBSCRIBE TO OUR NEWSLETTER<br />
          AND GRAB 30% OFF!
        </h2>

        <form className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-[380px] border-b border-darkSecondary/30 bg-transparent py-3 px-2 outline-none text-[14px] font-source-3 text-darkPrimary placeholder:text-darkSecondary/50 focus:border-darkPrimary transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-darkPrimary text-lightPrimary px-10 py-3 text-[11px] uppercase tracking-[2px] font-source-3 hover:bg-darkSecondary transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
