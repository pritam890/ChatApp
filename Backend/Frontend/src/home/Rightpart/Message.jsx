import React from 'react'

const Message = ({message}) => {
  const authuser = JSON.parse(localStorage.getItem("ChatApp"))
  const itsMe= message.senderId===authuser.user._id
  const chatName = itsMe? "chat-end" : "chat-start"
  const chatColor = itsMe? "bg-blue-500" : "bg-orange-300"

  const createdAt=new Date(message.createdAt)
  const formattedTime=createdAt.toLocaleTimeString([],{
    hour: '2-digit',
    minute: '2-digit'
  })
  return (
    <div>
      <div className='p-4'>
        <div className={`chat ${chatName}`}>
            <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
            <div className='chat-footer'>{formattedTime}</div>
        </div>
      </div>
    </div>
  )
}

export default Message
