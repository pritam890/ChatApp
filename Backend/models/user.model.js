import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    confirmpassword:{
        type:String,
           
    },
    image:{
        publicId:{
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    }  // URL from Cloudinary
},{timestamps:true}) // createdAt & updatedAt

const User=mongoose.model("User",userSchema)
export default User