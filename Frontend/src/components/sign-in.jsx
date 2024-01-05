import React,{useState} from 'react'
import {SignupCss} from '../cssfiles/sign-up.css'
import { useNavigate} from 'react-router-dom'
import Navbar from '../body/sections/Navbar'
import { handleSubmit } from '../axios_file'
import { Route, Routes } from 'react-router-dom';

import UserProfile from '../pages/User_profile'

export default function Signup()
{
    const [form,setform]=useState({})
    const navigate=useNavigate();
    const handleForm=(e)=>{

        // console.log(e.target.value, e.target.name);
        
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();


        // saving the form data on sessional storage

        // const {fullname,username,email}=form;
        // const dataSession={fullname,username,email};
        // sessionStorage.setItem('formData',JSON.stringify(dataSession))


        await handleSubmit(form)
        
        navigate('/userprofile',{ state: { formData: form } })
    
        
        
    }

    return (
        <>
        <Navbar/>
        <div className='all' >
        <div className="contain">   
    <form action="" onSubmit={handlesubmit}>

        {/* <p >{JSON.stringify(form)}</p> */}

        <h1>Sign up</h1>
        <div className="input">
            <input type="text" name="fullName" onChange={handleForm} placeholder="Full Name" required={true}/>
        </div>
        <div className="input">
            <input type="text" name='userName' onChange={handleForm} placeholder="Username" required={true}/>
        </div>
        <div className="input">
            <input type="text" name='email' onChange={handleForm} placeholder="Email" required={true}/>
        </div>
        <div className="input">
            <input type="password" name='password' onChange={handleForm} placeholder="Password" required={true}/>
        </div>
    <button type="submit" className="submit-btn" >Sign up</button>
    <p> Already have an account?
    <a href="/login">Login</a>
    </p>
    </form>
</div>
</div>
</>
    )
}