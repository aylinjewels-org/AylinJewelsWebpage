import React from 'react';
import { motion } from 'motion/react';

const fakeInstagramImages = [
  { id: 'i1', url: '../public/homepage/instagram/instagram (1).jpg' },
  { id: 'i2', url: '../public/homepage/instagram/instagram (2).jpg' },
  { id: 'i3', url: '../public/homepage/instagram/instagram (3).jpg' },
  { id: 'i4', url: '../public/homepage/instagram/instagram (4).jpg' },
  { id: 'i5', url: '../public/homepage/instagram/instagram (5).jpg' },
  { id: 'i6', url: '../public/homepage/instagram/instagram (6).jpg' },
];

const Instagram = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 pb-20 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {fakeInstagramImages.map((img, index) => (
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="block relative w-full aspect-square bg-[#fefefe] border border-darkSecondary/10 overflow-hidden group"
          >
            {img.url ? (
              <img src={img.url} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-darkSecondary/30 group-hover:text-darkSecondary transition-colors">
                <span className="text-[24px]">📷</span>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-darkPrimary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-lightPrimary text-[12px] uppercase tracking-wider font-source-3 pointer-events-none">
              View Post
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
