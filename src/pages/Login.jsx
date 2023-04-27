import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>CHAT APP</span>
        <span className='title'>Login</span>
        <form>
          <input type="email " placeholder='Email'/>
          <input type="password" placeholder='Password'/>
         
          <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login