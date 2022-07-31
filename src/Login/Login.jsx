import './login.css'

import React from 'react'

import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const Login = () => {
  const [val, setval] = useState({
    username: '',
    password: '',
  })
  const [isTrue, setIsTrue] = useState(false)
  const [bool, setbool] = useState(false)
  
  const userarray = useSelector(state => state.register.username)
  const handleChange = (e) => {
    const { name, value } = e.target
    setval({ ...val, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const check = (arr) => {
      for (let i = 0; i < userarray.length; i++) {
        if (arr[i].user === val.username && arr[i].pas === val.password) {
          return true
        }
      }
    }

    setbool(check(userarray))

  }
  useEffect(() => {

    bool ? setIsTrue(true) : setIsTrue(false)

  }, [bool])
  return (
    <div className="login">
      {
        isTrue ? <div style={{textAlign: 'center'}}><h1>Logged in Succesfully....</h1></div> :
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
              <input type="text" placeholder='Username' name='username' value={val.username} onChange={handleChange} className="loginInput" />
              <input type="password" placeholder='Password' name='password' val={val.password} onChange={handleChange} className="loginInput" />
              <button type='submit' className="loginbutton">Log In</button>
              <span className="loginforgot">Forgot Password?</span>

              <button className="loginregisterbutton">Create a new Account</button>
            </div>
          </form>

        </div>
      </div>
      }
    </div>
  )
}

export default Login