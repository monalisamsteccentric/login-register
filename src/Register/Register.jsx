import './register.css'

import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addToStorage } from '../Features/registerSlice'

const Register = () => {
  const [formDetails, setFormDetails] = useState({
    username: '',
    email:'',
    password:'',
    passwordA: '',
  })
  const [isPassed, setIsPassed] = useState(false)
  const navigate = useNavigate()
  const [errors, setError] = useState({})
  const dispatch = useDispatch()
  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormDetails({...formDetails, [name]: value})
    console.log(formDetails)
  }
  const handleSubmit = (e) =>{
     e.preventDefault()
     setError(validate(formDetails))
     setIsPassed(true)
    dispatch(addToStorage(formDetails)) 
    
  }
  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isPassed){
      navigate('/login')
    }
  },[errors, isPassed,navigate])
  const validate = (details) =>{
      const errors = {}
     if(!details.email){
      errors.email='email cannot be empty'
     }
     if(!details.username){
      errors.username='username cannot be empty'
     }
     if(!details.password){
      errors.password='password cannot be empty'
     }
     if(!details.passwordA){
      errors.passwordA='please retype the password'
     }
     if(details.password !== details.passwordA ){
      errors.message='passwords do not match'
     }
     return errors
  }
  
 

  return (
    <>
    <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginlogo">
                    MerrySocial
                </h3>
              <span className="logindesc">
                Connect with friends and the world around you on MerrySocial..
              </span>
            </div>
            <div className="loginRight">
              <form onSubmit={handleSubmit}>

                <div className="loginbox">
                    <input type="text" placeholder='Username' 
                    value={formDetails.username}
                    name='username'
                    onChange={handleChange}
                    className="loginInput" />
                    <span>{errors.username}</span>
                    <input type="email" placeholder='Email'
                    name='email'
                    value={formDetails.email} 
                    onChange={handleChange}
                    className="loginInput" />
                    <span>{errors.email}</span>
                    <input type="password" placeholder='Password' 
                    name='password'
                    value={formDetails.password} 
                    onChange={handleChange}
                    className="loginInput" />
                    <span>{errors.password}</span>
                    <input type="password"  placeholder='Password Again'
                    value={formDetails.passwordA} 
                    name="passwordA"
                    onChange={handleChange}
                    className="loginInput" />
                    <span>{errors.passwordA}</span>
                    <button type='submit' className="loginbutton">Sign Up</button>
                    <span>{errors.message}</span>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register