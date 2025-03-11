import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom';     
export const LoginSignup = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/admin'); 
    };
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
    <h1>Login</h1>
    <div className="loginsignup-fields">
        <input type='text' placeholder='Username'/>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
    </div>
    <button onClick={handleLogin}>Continue</button>
    
        </div>
    </div>
  )
}
export default LoginSignup