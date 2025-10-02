import axios from 'axios'

const API_BASE_URL = 'https://fakestoreapi.com'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }
}

// Get single product by ID
export const getProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching product:', error)
    throw new Error('Failed to fetch product')
  }
}

// Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw new Error('Failed to fetch products by category')
  }
}

export default api
