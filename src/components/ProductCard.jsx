

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="bg-[rgba(32,16,79,0.4)] rounded-2xl overflow-hidden shadow-lg 
                 transition-all duration-300 relative  flex flex-col 
                 border border-[#2a1a5f] backdrop-blur-lg w-full max-w-[300px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0 12px 40px rgba(32, 16, 79, 0.5)",
        background: "rgba(32, 16, 79, 0.6)",
        borderColor: "#2a1a5f"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* صورة المنتج */}
      <motion.div
        className="relative h-[250px] overflow-hidden bg-gradient-to-br from-[#1a0a3f] to-[#20104f] flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </motion.div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        
        {/* الكاتيجوري */}
        <motion.div
          className="bg-[#2a1a5f] text-white px-3 py-1 rounded-full text-xs font-semibold capitalize w-fit mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.1 }}
        >
          {product.category}
        </motion.div>

        {/* العنوان */}
        <motion.h3
          className="text-base font-semibold text-gray-200 leading-snug line-clamp-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {product.title}
        </motion.h3>

        {/* السعر */}
        <motion.div
          className="text-xl font-bold text-purple-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          ${product.price}
        </motion.div>

        {/* التقييم */}
        <motion.div
          className="flex items-center gap-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <span className="text-yellow-400 text-lg">
            {'★'.repeat(Math.floor(product.rating.rate))}
            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
          </span>
          <span className="text-purple-200 text-xs">
            ({product.rating.count})
          </span>
        </motion.div>

        {/* الزرار */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <Link
            to={`/product/${product.id}`}
            className="block w-full px-5 py-3 text-sm font-semibold text-white 
                       bg-gradient-to-br from-[#20104f] to-[#2a1a5f] rounded-lg 
                       shadow-md text-center transition-transform duration-300 
                       hover:-translate-y-1 hover:shadow-xl"
          >
            عرض التفاصيل
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProductCard
