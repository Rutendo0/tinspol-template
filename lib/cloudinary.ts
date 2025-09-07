import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary using environment variables
// Ensure these are set in Vercel project settings
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default cloudinary