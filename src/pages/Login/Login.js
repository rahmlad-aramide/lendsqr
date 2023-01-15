import React from 'react'
import './index.scss'
import logo from '../../assets/lendsqr.svg';
import pablo from '../../assets/images/signin-image.svg';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='login-page flex'>
        <div className='hero'>
            <div className='logo flex'>
                <img src={logo} alt='Lendsqr' />
            </div>
            <div className='image flex justify-end'>
                <img src={pablo} alt='Login Pablo' />
            </div>
        </div>
        <div className='form flex flex-col justify-center'>
            <div className='title'>
                <h1 className='welcome'>Welcome!</h1>
                <h2 className='headline'>Enter details to login</h2>
            </div>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />  
            <div>
                <button className='forgot-password'>
                    Forgot Password?
                </button>
            </div>
            <Link to='/dashboard'>
                <button className='login-button'>LOG IN</button>
            </Link>
        </div>
    </div>
  )
}

export default index