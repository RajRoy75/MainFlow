import React from 'react';
import { PiStudentBold } from 'react-icons/pi';
import '../css/login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <header>
        <Link to={'/'}>
        <div className="logo">

        <img src={require('../images/logo.png')} alt="" />
        </div>
        </Link>
        {/* <a href = '/' className='logo'>MyBlog</a> */}

        <nav>         
            <>            
            <Link to ='/login'>Login</Link>
            <Link to ='/signup'>Sign Up</Link>
            </>          
        </nav>
      </header>
    <div className="login-container">
        <div className="logo">
            <PiStudentBold className='img'/>
        </div>
        <h2>Login</h2>
        <form>
            <input type="text" 
            placeholder='Username'
            />            
            <input type="password" 
            placeholder='password'
            />
            <button type='submit'>Log In</button>
        </form>
    </div>
    </>
  )
}

export default Login