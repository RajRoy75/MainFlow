import React from 'react';
import { Link } from 'react-router-dom';
import { PiStudentBold } from 'react-icons/pi';
import '../css/login.css'

function SignUp() {
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
        <h2>SignUp</h2>
        <form>
            <input type="text" 
            placeholder='Username'
            />            
            <input type="password" 
            placeholder='password'
            />
            <button type='submit'>Sign up</button>
        </form>
    </div>
    </>
  )
}

export default SignUp