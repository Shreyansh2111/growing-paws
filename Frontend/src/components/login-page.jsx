import React, { useState } from 'react';
import { SignupCss } from '../cssfiles/sign-up.css';
import Navbar from '../body/sections/Navbar';
// import { handleSubmit } from '../axios_file';
// import { handleLoginSubmit } from '../axios_file';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' 

export default function Login() {
  const navigate=useNavigate();
  const [form, setform] = useState({});
  const handleLogin = (e) => {


    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit=async (e)=>{
    e.preventDefault();

     await axios
      .post('http://localhost:5000/userlogin',form,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        
        console.log(res.data)
        navigate('/')
      })
      .catch((error) => {
        console.log("axios error",error);
      });
      

  
  }

  return (  
    <>
      <Navbar />
      <div className='all'>

      {/* <p>{JSON.stringify(form)}</p> */}

        <div className='contain'>
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <div className='input'>
              <input
                type='text'
                onChange={handleLogin}
                name='email'
                placeholder='Email'
                required={true}
              />
            </div>
            <div className='input'>
              <input
                type='password'
                onChange={handleLogin}
                name='password'
                placeholder='Password'
                required={true}
              />
            </div>

            <button type='submit' className='submit-btn'>
              Login
            </button>

            <a href='/signup'>Create Account</a>
          </form>
        </div>
      </div>
    </>
  );
}
