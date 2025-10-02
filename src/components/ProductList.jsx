import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { getProducts } from '../services/api'
import './ProductList.css'

const ProductList = ({ showAllProducts = false }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(8)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        console.log('Fetched products:', data) // للتأكد من البيانات
        setProducts(data)
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

  // حساب المنتجات للصفحة الحالية
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)
console.log({currentProducts});

  // تغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // الصفحة التالية
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // الصفحة السابقة
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
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
      className="product-list-section"
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
            {showAllProducts ? 'جميع المنتجات' : 'منتجاتنا المميزة'}
          </h2>
          <p className="section-subtitle">
            {showAllProducts 
              ? 'اكتشف مجموعتنا الكاملة من المنتجات عالية الجودة' 
              : 'اكتشف مجموعة واسعة من المنتجات عالية الجودة'
            }
          </p>
        </motion.div>
        
        <motion.div 
          className="products-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {currentProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="pagination"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="pagination-info">
              <span>عرض {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, products.length)} من {products.length} منتج</span>
            </div>
            
            <div className="pagination-controls">
              <button 
                className="pagination-btn"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                ‹ السابق
              </button>
              
              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
              
              <button 
                className="pagination-btn"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                التالي ›
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default ProductList
