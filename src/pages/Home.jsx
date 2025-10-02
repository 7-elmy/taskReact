import React from 'react'
import { motion } from 'framer-motion'
import ProductsGrid from '../components/ProductsGrid'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              مرحباً بك في متجر المنتجات
            </h1>
            <p className="hero-subtitle">
              اكتشف مجموعة واسعة من المنتجات عالية الجودة بأفضل الأسعار
            </p>
            <motion.button 
              className="btn btn-primary hero-button"
              whileHover={{ 
                scale: 1.05,
                background: 'linear-gradient(45deg, #2a1a5f, #20104f)',
                boxShadow: '0 8px 25px rgba(32, 16, 79, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              تصفح المنتجات
            </motion.button>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-placeholder">
              <div className="shopping-cart-icon">🛒</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container">
          <h2 className="features-title">
            لماذا تختارنا؟
          </h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ 
                y: -5,
                background: 'rgba(32, 16, 79, 0.6)',
                boxShadow: '0 10px 30px rgba(32, 16, 79, 0.4)',
                borderColor: '#c7b3e8'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">شحن سريع</h3>
              <p className="feature-description">توصيل سريع وآمن لجميع أنحاء البلاد</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              whileHover={{ 
                y: -5,
                background: 'rgba(32, 16, 79, 0.6)',
                boxShadow: '0 10px 30px rgba(32, 16, 79, 0.4)',
                borderColor: '#c7b3e8'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">جودة عالية</h3>
              <p className="feature-description">منتجات مختارة بعناية لضمان الجودة</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              whileHover={{ 
                y: -5,
                background: 'rgba(32, 16, 79, 0.6)',
                boxShadow: '0 10px 30px rgba(32, 16, 79, 0.4)',
                borderColor: '#c7b3e8'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">أسعار منافسة</h3>
              <p className="feature-description">أفضل الأسعار في السوق مع ضمان الجودة</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

          {/* Products Section */}
          <section id="products">
            <ProductsGrid />
          </section>
    </div>
  )
}

export default Home
