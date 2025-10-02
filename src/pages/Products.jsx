import React from 'react'
import { motion } from 'framer-motion'
import ProductList from '../components/ProductList'
import './Products.css'

const Products = () => {
  return (
    <motion.div 
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      

      {/* Products List with Pagination */}
      <ProductList showAllProducts={true} />
    </motion.div>
  )
}

export default Products
