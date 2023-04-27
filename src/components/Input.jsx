import React from 'react'
import {AiFillFolderAdd} from "react-icons/ai"
import {MdAttachFile} from "react-icons/md"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Text message.....'/>
      <div className="send">
        <i><MdAttachFile /></i>
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <i><AiFillFolderAdd /></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input