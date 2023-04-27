import React from 'react'
import {BsFillCameraVideoFill, BsThreeDots} from "react-icons/bs"
import {FaUserPlus} from "react-icons/fa"
import Messages from './Messages'
import Input from "./Input"
 
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Messi</span>
        <div className="chatIcons">
          <i> <BsFillCameraVideoFill /> </i>
          <i> <FaUserPlus /> </i>
          <i> <BsThreeDots /> </i>
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat