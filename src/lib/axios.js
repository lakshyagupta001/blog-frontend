import axios from "axios"

// Determine the base URL with production fallback
const isDevelopment = import.meta.env.DEV || import.meta.env.MODE === "development"

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 
    (isDevelopment 
        ? "http://localhost:5001/api" 
        : "https://blog-backend-smoky-alpha.vercel.app/api")

// Log the API URL being used (helps with debugging in all environments)
console.log("🔧 Environment Info:")
console.log("  - Mode:", import.meta.env.MODE)
console.log("  - Is Dev:", isDevelopment)
console.log("  - VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL)
console.log("  - Final BASE_URL:", BASE_URL)

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});