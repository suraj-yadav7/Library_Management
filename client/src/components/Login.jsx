import Input from './Input'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { useState } from 'react'
import axios from "axios";



const Login = () => {
  const [userData, setUserData] = useState("")
const navigate = useNavigate()
  const handelChange= (e)=>{
      const {value, name} = e.target
      setUserData({...userData , [name]:value})
  }
  console.log("user data: ", userData)

  const handleSubmit=(e)=>{
      e.preventDefault()
      loginUser();
  }
  const loginUser = async()=>{
    try{
        let response = await axios.post('http://localhost:5000/api/login', userData)
        console.log("response: ", response)
        toast.success(response.data.message)
        setTimeout(()=>{
          navigate("/")
        },1500)
    }
    catch(error){
        console.log("error: ", error.response)
        const {data}=error.response
        toast.warning(data.message)
    }
};
  return (
    <>
        <div>
        <ToastContainer/>
          <form onSubmit={handleSubmit}>
            <Input type='email' label="email" name='email' placeholder="email" onChange={handelChange}/>
            <Input type='password' label="password" name='password' placeholder="password" onChange={handelChange}/>
            <Button type='submit' className='bg-blue-500 hover:bg-blue-300' >login</Button>
            <p>Don't have account, Signup <Link to="/register"><span className='underline text-blue-500'>here</span></Link></p>
          </form>
        </div>
    </>
  )
}

export default Login;