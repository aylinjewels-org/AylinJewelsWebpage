import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Fake Data for the Bestsellers - Ready to be replaced by DB fetch based on "bestseller" tag
const initialProducts = [
  { id: 'b1', name: 'Elegance Ring', price: 120, imageUrl: '../public/homepage/bestseller/bestseller (1).png', tag: 'bestseller' },
  { id: 'b2', name: 'Silver Hoop', price: 95, imageUrl: '../public/homepage/bestseller/bestseller (2).png', tag: 'bestseller' },
  { id: 'b3', name: 'Diamond Pendant', price: 350, imageUrl: '../public/homepage/bestseller/bestseller (3).png', tag: 'bestseller' },
  { id: 'b4', name: 'Rose Gold Band', price: 180, imageUrl: '../public/homepage/bestseller/bestseller (4).png', tag: 'bestseller' },
  { id: 'b5', name: 'Pearl Choker', price: 210, imageUrl: '../public/homepage/bestseller/bestseller (5).png', tag: 'bestseller' },
  { id: 'b6', name: 'Sapphire Studs', price: 290, imageUrl: '../public/homepage/bestseller/bestseller (6).png', tag: 'bestseller' },
  { id: 'b7', name: 'Gold Bracelet', price: 400, imageUrl: '../public/homepage/bestseller/bestseller (7).png', tag: 'bestseller' },
  { id: 'b8', name: 'Onyx Signet Ring', price: 150, imageUrl: '../public/homepage/bestseller/bestseller (8).png', tag: 'bestseller' },
  { id: 'b9', name: 'Emerald Drop', price: 450, imageUrl: '../public/homepage/bestseller/bestseller (9).png', tag: 'bestseller' },
];

const Bestsellers = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate logic
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setProducts((prev) => {
        const newArr = [...prev];
        // Take the first item and move it to the end
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
    }, 3000); // 3 seconds per rotation

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="max-w-[100vw] mx-auto py-16 md:py-24 overflow-hidden bg-white">
      {/* Header Container */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-[36px] md:text-[46px] font-source-3 font-light text-darkPrimary mb-2">
            Bestsellers
          </h2>
        <div>
          <p className="text-[12px] md:text-[13px] text-darkSecondary max-w-[300px] font-source-3 leading-5">
            The best-loved timeless jewelry pieces crafted with elegance. Discover our most sought-after designs.
          </p>
        <button className="border-b border-darkPrimary pb-1 text-[12px] uppercase tracking-[2px] font-source-3 text-darkPrimary hover:text-darkSecondary hover:border-darkSecondary transition-colors self-start md:self-end">
          Shop Now
        </button>
        </div>
      </div>

      {/* Marquee/Carousel Container */}
      <div 
        className="relative w-full h-[260px] md:h-[340px] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-4 md:gap-6 items-end justify-center w-full h-[240px] md:h-[300px]">
          {products.map((product, idx) => {
            // We have 9 items. The center item is index 4.
            const centerIndex = 4;
            const distance = Math.abs(idx - centerIndex);
            
            // Calculate visibility based on distance
            let isVisible = distance <= 3;

            const isCenter = distance === 0;

            return (
              <motion.div
                key={product.id}
                layout
                initial={false}
                animate={{ 
                  opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }} // Smooth easing
                className="flex flex-col items-center shrink-0 w-[160px] md:w-[220px] cursor-pointer"
                style={{
                  zIndex: 20 - distance, // Ensure center is on top
                }}
              >
                {/* Image Container with CSS height transition for 1:1 normal, and 1:1.25 center */}
                <div 
                  className={`w-full bg-[#fefefe] border border-darkSecondary/10 mb-4 overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    isCenter 
                      ? 'h-[200px] md:h-[275px]' 
                      : 'h-[160px] md:h-[220px]'
                  }`}
                >
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-darkSecondary/50 font-source-3 text-xs">
                      Product Image
                    </div>
                  )}
                </div>

                {/* Product Details - Always visible, name/price on ends */}
                <div className="w-full flex justify-between items-center h-[30px] px-1">
                  <h3 className="text-[12px] md:text-[13px] font-source-3 text-darkPrimary font-medium truncate pr-2">
                    {product.name}
                  </h3>
                  <p className="text-[12px] md:text-[13px] text-darkSecondary font-source-3 font-semibold shrink-0">
                    ${product.price}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
