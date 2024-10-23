import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConverastion.js'
import axios from "axios"

const useSendMessage = () => {
    const [loading, setLoading]=useState(false)
    const {messages, setMessage, selectedConversation} = useConversation()
    const sendMessages = async(message)=>{
        setLoading(true)
        try{
            const res=await axios.post(
                `/api/message/send/${selectedConversation._id}`, {message}
            )
            setMessage([...messages,res.data])
            setLoading(false)
        }catch(error){
            console.log("Error in useSendMessage: "+error)
            setLoading(false)
        }
    }
    return {loading, sendMessages}
}

export default useSendMessage
