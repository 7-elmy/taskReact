// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import './Header.css'

// const Header = () => {
//   const location = useLocation()

//   const navItems = [
//     { path: '/', label: 'الرئيسية' },
//     { path: '/products', label: 'المنتجات' },
//     { path: '/about', label: 'حولنا' }
//   ]

//   return (
//     <motion.header 
//       className="header"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="container">
//         <nav className="nav">
//           <ul>
//             {navItems.map((item, index) => (
//               <motion.li 
//                 key={item.path}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 <Link 
//                   to={item.path} 
//                   className={location.pathname === item.path ? 'active' : ''}
//                 >
//                   {item.label}
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
        
//         <motion.div 
//           className="logo"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Link to="/" className="logo-link">
//             <div className="logo-icon">🛍️</div>
//             <h1>متجر المنتجات</h1>
//           </Link>
//         </motion.div>
//       </div>
//     </motion.header>
//   )
// }

// export default Header

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CiTextAlignJustify } from "react-icons/ci"
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/products', label: 'المنتجات' },
    { path: '/about', label: 'حولنا' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Logo and Mobile Menu Button */}
        <div className="logo-wrapper  w-full d-flex justify-between items-center">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="logo-link">
              <div className="logo-icon">🛍️</div>
              <h1>متجر المنتجات</h1>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="menu-toggle"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <CiTextAlignJustify />
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="nav mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header