import React from 'react'
import {AiFillFolderAdd} from "react-icons/ai"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>CHAT APP</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='Name'/>
          <input type="email " placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <i> <AiFillFolderAdd /></i>
            <span>Add Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register