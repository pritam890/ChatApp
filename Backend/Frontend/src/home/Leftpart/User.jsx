import React from 'react'
import UseConversation from '../../zustand/useConverastion.js'
import { useSocketContext } from '../../context/SocketContext.jsx'


const User = ({user}) => {
  const {selectedConversation, setSelectedConversation}=UseConversation()
  const isSelected=selectedConversation?._id===user._id
  const {socket , onlineUsers} = useSocketContext()
  const isOnline=onlineUsers.includes(user._id)
  return (
    <div 
      className={`hover:bg-red-100 duration-300 ${isSelected? "bg-orange-200":""}`}
      onClick={()=>setSelectedConversation(user)}>
      <div className='flex space-x-4 px-8 py-3 hover:bg-red-100 rounded-md'>
            <div className={`avatar ${isOnline? "online": ""}`}>
                <div className="w-12 rounded-full">
                    <img src={user.image.url}/>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>{user.fullname}</h1>
                <span>{user.email}</span>
            </div>
        </div>
    </div>
  )
}

export default User
