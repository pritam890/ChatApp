import express from "express"
import { allUsers, login, logout, signup } from "../controller/user.controller.js"
import secureRoute from "../middleware/secureRoute.js"
import cloudinary from "../config/cloudinaryConfig.js";
import multer from 'multer';

const router=express.Router()
const upload = multer({ dest: 'uploads/' });

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allusers", secureRoute,allUsers)


export default router