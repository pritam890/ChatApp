import React, { useState } from 'react'
import { BiLogOutCircle} from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import axios from "axios"
import Cookies from "js-cookie"
import toast from 'react-hot-toast';
import { useAuth } from '../../context/Authprovider';

const Logout = () => {
  const [loading,setLoading] = useState(false)
  const [authUser]=useAuth()
  const handleLogout=async()=>{
    setLoading(true)
    try{
      await axios.post("/api/user/logout")
      localStorage.removeItem("ChatApp")
      Cookies.remove("jwt")
      setLoading(false)
      toast.success("Logged out successfully")
      window.location.reload()
    }catch(error){
      console.log("Error in logoout: "+error)
      toast.error("Error in logging out")
    }
  }
  return (
    <div className="h-[10vh] border-[1px] border-gray-100 bg-gray-200 flex items-center px-4">
  <div className="flex items-center justify-between w-full">
    {/* Left Icon (Logout) */}
    <BiLogOutCircle
      className="text-5xl text-gray-600 hover:bg-red-200 duration-300 cursor-pointer rounded-full p-2"
      onClick={handleLogout}
    />
    
    {/* Right Icon (User) */}
    <div className='flex space-x-4 p-2  rounded-md'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={authUser.user.image.url} />
                </div>
            </div>
            <div>
                <h1 className='font-bold'>{authUser.user.fullname}</h1>
                <span>{authUser.user.email}</span>
            </div>
    </div>
    
  </div>
</div>
  )
}

export default Logout
