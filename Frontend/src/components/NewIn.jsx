import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { RiHeartLine, RiHeartFill } from '@remixicon/react';

// Fake Data simulating a database response based on a tag (e.g. "new-in")
const fakeProducts = [
  {
    id: 'p1',
    name: 'Sterling Ring',
    description: 'Elegant silver ring for women',
    price: 159,
    imageUrl: '../public/homepage/newIn/newIn (1).png',
    tag: 'new-in',
  },
  {
    id: 'p2',
    name: 'Diamond Studs',
    description: 'Classic minimalist everyday wear',
    price: 249,
    imageUrl: '../public/homepage/newIn/newIn (2).png',
    tag: 'new-in',
  },
  {
    id: 'p3',
    name: 'Gold Chain',
    description: '18k pure gold delicate chain',
    price: 320,
    imageUrl: '../public/homepage/newIn/newIn (3).png',
    tag: 'new-in',
  },
  {
    id: 'p4',
    name: 'Pearl Drop Earrings',
    description: 'Freshwater pearls with silver hook',
    price: 185,
    imageUrl: '../public/homepage/newIn/newIn (4).png',
    tag: 'new-in',
  },
];

const NewIn = () => {
  const [products, setProducts] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // In the future, this will be an API call like:
    // fetch('/api/products?tag=new-in').then(...)
    setProducts(fakeProducts);
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center mb-10 md:mb-14 gap-8">
        <h2 className="text-[36px] md:text-[42px] font-source-3 font-light tracking-wide text-darkPrimary">
          NEW IN
        </h2>

        <div className="text-[12px] md:text-[13px] text-darkSecondary max-w-[280px] leading-5 font-source-3">
          Timeless pieces crafted from sterling silver for your everyday elegance.
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

    </section>
  );
};

const ProductCard = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer max-w-[250px] mx-auto w-full"
    >
      <div className="relative w-full aspect-square bg-[#fefefe] border border-darkSecondary/10 mb-4 overflow-hidden">
        {/* Placeholder for Product Image */}
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-darkSecondary/50 font-source-3 text-sm">
            Image Placeholder
          </div>
        )}

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 text-darkPrimary bg-lightPrimary/50 p-2 rounded-full hover:bg-lightPrimary transition-colors"
        >
          {isLiked ? <RiHeartFill size={18} className="text-red-500" /> : <RiHeartLine size={18} />}
        </button>
      </div>

      <h3 className="text-[15px] mb-1 font-source-3 font-semibold text-darkPrimary">
        {product.name}
      </h3>

      <p className="text-[12px] text-darkSecondary mb-2 font-source-3">
        {product.description}
      </p>

      <p className="text-[14px] font-semibold text-darkPrimary font-source-3">
        ${product.price}
      </p>
    </motion.div>
  );
};

export default NewIn;
