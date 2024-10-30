import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadToCloudinary = async (path, folder = "my-profile") => {
  try {
    const data = await cloudinary.uploader.upload(path, { folder: folder });
    return { url: data.secure_url, publicId: data.public_id };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default uploadToCloudinary;