# دليل النشر - Deployment Guide

## خيارات النشر المتاحة

### 1. Vercel (موصى به)

1. **تثبيت Vercel CLI:**
```bash
npm install -g vercel
```

2. **تسجيل الدخول:**
```bash
vercel login
```

3. **نشر المشروع:**
```bash
vercel --prod
```

### 2. Netlify

1. **تثبيت Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **بناء المشروع:**
```bash
npm run build
```

3. **نشر المشروع:**
```bash
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

1. **تثبيت gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **إضافة سكريبت في package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **نشر المشروع:**
```bash
npm run deploy
```

### 4. Firebase Hosting

1. **تثبيت Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **تسجيل الدخول:**
```bash
firebase login
```

3. **تهيئة المشروع:**
```bash
firebase init hosting
```

4. **بناء ونشر:**
```bash
npm run build
firebase deploy
```

## إعدادات مهمة للنشر

### 1. إعداد Base Path (إذا كان المشروع في مجلد فرعي)

في `vite.config.js`:
```javascript
export default {
  base: '/product-catalog/',
  // ... باقي الإعدادات
}
```

### 2. إعدادات البيئة

إنشاء ملف `.env.production`:
```
VITE_API_BASE_URL=https://fakestoreapi.com
```

### 3. تحسين الأداء

- تم ضغط الملفات تلقائياً بواسطة Vite
- تم تحسين الصور
- تم تقسيم الكود (Code Splitting)

## اختبار النشر المحلي

```bash
npm run build
npm run preview
```

## ملاحظات مهمة

- تأكد من أن جميع الروابط تعمل بشكل صحيح
- اختبر التطبيق على أجهزة مختلفة
- تأكد من عمل API بشكل صحيح
- تحقق من الأداء وسرعة التحميل

## استكشاف الأخطاء

### مشكلة في الروابط
- تأكد من إعداد `base` في vite.config.js
- تحقق من إعدادات الخادم

### مشكلة في API
- تأكد من أن API متاح
- تحقق من إعدادات CORS

### مشكلة في الصور
- تأكد من مسارات الصور صحيحة
- تحقق من إعدادات الخادم للصور
