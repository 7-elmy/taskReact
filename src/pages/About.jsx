import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>حول متجر المنتجات</h1>
          <p>نحن ملتزمون بتقديم أفضل تجربة تسوق عبر الإنترنت</p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="mission"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>رسالتنا</h2>
              <p>
                نحن في متجر المنتجات نؤمن بأن التسوق يجب أن يكون تجربة ممتعة وسهلة. 
                نسعى لتقديم مجموعة متنوعة من المنتجات عالية الجودة بأفضل الأسعار، 
                مع ضمان رضا العملاء في كل خطوة.
              </p>
              <p>
                فريقنا المختص يعمل بجد لضمان حصولك على أفضل المنتجات وأسرع خدمة، 
                مع دعم عملاء متاح على مدار الساعة لمساعدتك في أي استفسار.
              </p>
            </div>
            <motion.div 
              className="mission-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-placeholder">
                <div className="icon">🏪</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="values"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container">
          <h2>قيمنا الأساسية</h2>
          <div className="values-grid">
            <motion.div 
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">🎯</div>
              <h3>الجودة</h3>
              <p>نختار منتجاتنا بعناية فائقة لضمان أعلى معايير الجودة</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">🤝</div>
              <h3>الثقة</h3>
              <p>نبني علاقات قوية مع عملائنا من خلال الشفافية والصدق</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">⚡</div>
              <h3>السرعة</h3>
              <p>نوفر خدمة سريعة وفعالة لضمان رضا عملائنا</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">💡</div>
              <h3>الابتكار</h3>
              <p>نستخدم أحدث التقنيات لتحسين تجربة التسوق</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="team"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container">
          <h2>فريقنا</h2>
          <div className="team-grid">
            <motion.div 
              className="team-member"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="member-avatar">👨‍💼</div>
              <h3>أحمد محمد</h3>
              <p>المدير التنفيذي</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="member-avatar">👩‍💻</div>
              <h3>فاطمة علي</h3>
              <p>مديرة التطوير</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="member-avatar">👨‍🎨</div>
              <h3>محمد حسن</h3>
              <p>مصمم المنتجات</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container">
          <h2>تواصل معنا</h2>
          <div className="contact-info">
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">📧</div>
              <h3>البريد الإلكتروني</h3>
              <p>info@productstore.com</p>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">📞</div>
              <h3>الهاتف</h3>
              <p>+966 50 123 4567</p>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">📍</div>
              <h3>العنوان</h3>
              <p>الرياض، المملكة العربية السعودية</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About
