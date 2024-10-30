import React from 'react'
import useConversation from '../../zustand/useConverastion.js'
import { useSocketContext } from '../../context/SocketContext.jsx'
import { CiMenuFries } from "react-icons/ci";


const Chatuser = () => {
  const { selectedConversation }=useConversation()
  const {socket , onlineUsers} = useSocketContext()
  const getOnlineUsersStatus = (userId)=>{
    return onlineUsers.includes(userId)?"online":"offline"
  }
  const isOnline=onlineUsers.includes(selectedConversation._id)
  console.log(selectedConversation)
  return (
    <div className="border-[1px] border-gray-300  relative flex items-center h-[8%] justify-center gap-4 bg-gray-100 ">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-gray-600 text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-100 ">
        <div className={`avatar ${isOnline? "online":""}`}>
          <div className="w-16 text-xl rounded-full">
          <img src={selectedConversation.image.url} />
          </div>
        </div>
        <div>
          <h1 className="text-xl text-gray-600">{selectedConversation.fullname}</h1>
          <span className="text-sm text-gray-600">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Chatuser
