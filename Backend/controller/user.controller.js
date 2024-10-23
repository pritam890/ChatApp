import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookies from "../jwt/generateToken.js"



export const signup=async(req,res)=>{
    const {fullname,email,password,confirmpassword}=req.body;
    try{
        if(password!=confirmpassword){
            return res.status(400).json({error:"Passwords do not match"})
        }
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({error:"User already registered"})
        }
        // Hashing the password
        const hashPassword=await bcrypt.hash(password,10)
        const newUser = await new User({
            fullname,
            email,
            password:hashPassword
        })
        await newUser.save()
        if(newUser){
            createTokenAndSaveCookies(newUser._id,res)
            res.status(201).json({message:"User created successfully", 
                user:{
                    _id:newUser._id,
                    fullname:newUser.fullname,
                    email:newUser.email
                }
            })
        }
        
    }catch(error){
        console.log(error)
        console.log("Internal server error")
    }
}
export const login=async(req,res)=>{
    const {email,password}=req.body
    try{    
        const user=await User.findOne({email})
        const isMatch=await bcrypt.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({error:"Invalid credential"})
        }
        createTokenAndSaveCookies(user._id,res)
        res.status(200).json({message:"User login successfully", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
    }catch(error){
        console.log(error)
        console.log("Internal server error")
    }
}
export const logout=async(req,res)=>{
    try{
        res.clearCookie("jwt")
        return res.status(201).json({message:"User logged out successfully"})
    }catch(error){
        console.log(error)
        console.log("Internal server error")
    }
}
export const allUsers=async(req,res)=>{
    try{
        const loggedInUser = req.user._id
        const filteredUsers= await User.find({_id:{$ne: loggedInUser}}).select("-password");
        if(!filteredUsers){
            res.status(404).json({message:"User data not found"});
        }
        res.status(201).json(filteredUsers);
    }catch(error){
        console.log("Error in alluser controller: "+ error)
    }
}
