import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

const Users = () => {
  const [allUsers,loading]=useGetAllUsers()
  console.log(allUsers)
  return (
    <div>
      <h1 className='border-[1px] px-8 py-2 border-gray-100 text-green-600 font-bold text-1.5xl bg-gray-200 '>
        Messages
        </h1>
        <div className='py-2 flex-1 overflow-y-auto' style={{maxHeight: "calc(84vh - 10vh)", scrollbarWidth: "none"}}>
           {allUsers.map((user,index)=>(
            <User key={index} user={user} />
           ))} 
        </div>
    </div>
  )
}

export default Users
