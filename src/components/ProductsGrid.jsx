import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { getProducts } from '../services/api'
import './ProductsGrid.css'

const ProductsGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        // عرض أول 8 منتجات فقط
        setProducts(data.slice(0, 8))
        setError(null)
      } catch (err) {
        setError('فشل في تحميل المنتجات. يرجى المحاولة مرة أخرى.')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <motion.div 
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-spinner"></div>
        <p className="loading-text">جاري تحميل المنتجات...</p>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div 
        className="error-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-message">
          <h3 className="error-title">عذراً!</h3>
          <p className="error-text">{error}</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            إعادة المحاولة
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.section 
      className="products-grid-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">
            منتجاتنا المميزة
          </h2>
          <p className="section-subtitle">اكتشف مجموعة مختارة من أفضل منتجاتنا</p>
        </motion.div>
        
        <motion.div 
          className="products-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="view-more-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/products" 
            className="btn btn-primary view-more-btn"
          >
            عرض جميع المنتجات
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProductsGrid
