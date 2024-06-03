import React from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div>
            <Input type='email' label="email" placeholder="email"/>
            <Input type='password' label="password" placeholder="password"/>
            <Button className='bg-blue-500 hover:bg-blue-300' >login</Button>
            <p>Don't have account, Signup <Link to="/register"><span className='underline text-blue-500'>here</span></Link></p>
        </div>
    </>
  )
}

export default Login;