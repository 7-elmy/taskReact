import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProduct } from '../services/api'
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProduct(id)
        setProduct(data)
        setError(null)
      } catch (err) {
        setError('فشل في تحميل تفاصيل المنتج. يرجى المحاولة مرة أخرى.')
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  const handleAddToCart = () => {
    // Here you would typically add to cart logic
    alert(`تم إضافة ${quantity} من ${product.title} إلى السلة!`)
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-spinner"></div>
        <p>جاري تحميل تفاصيل المنتج...</p>
      </motion.div>
    )
  }

  if (error || !product) {
    return (
      <motion.div 
        className="error-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-message">
          <h3>عذراً!</h3>
          <p>{error || 'المنتج غير موجود'}</p>
          <div className="error-actions">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              العودة للرئيسية
            </button>
            <Link to="/" className="btn btn-outline">
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="product-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="breadcrumb"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/">الرئيسية</Link>
          <span> / </span>
          <span>تفاصيل المنتج</span>
        </motion.div>

        <div className="product-details-content">
          <motion.div 
            className="product-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.title}
                className="product-image"
              />
            </div>
          </motion.div>

          <motion.div 
            className="product-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="product-category">
              {product.category}
            </div>
            
            <h1 className="product-title">{product.title}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {'★'.repeat(Math.floor(product.rating.rate))}
                {'☆'.repeat(5 - Math.floor(product.rating.rate))}
              </div>
              <span className="rating-text">
                {product.rating.rate} ({product.rating.count} تقييم)
              </span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
            </div>

            <div className="product-description">
              <h3>الوصف</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>

              <motion.button 
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إضافة إلى السلة
              </motion.button>
            </div>

            <div className="product-features">
              <div className="feature">
                <span className="feature-icon">🚚</span>
                <span>شحن مجاني</span>
              </div>
              <div className="feature">
                <span className="feature-icon">↩️</span>
                <span>إرجاع مجاني خلال 30 يوم</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <span>دفع آمن</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetails
