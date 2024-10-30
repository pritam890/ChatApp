import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
const Typesend = () => {
  const [message, setMessage]=useState("")
  const {loading,sendMessages}=useSendMessage()
  const handleSubmit = async (e)=>{
    console.log(e)
    e.preventDefault()
    await sendMessages(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-1 h-[8vh]  bg-gray-100'>
        <div className='w-[70%] mx-4'>
            <input type="text" 
            placeholder="Type here" 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="border border-gray-400 outline-none rounded-xl mt-1 px-4 py-3 bg-white w-full" />
        </div>
        <button>
            <IoSend className='text-3xl text-gray-600'/>
        </button>
      </div>
    </form>
  )
}

export default Typesend
