import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { useState } from 'react'
import axios from "axios";



const Login = () => {
const [userData, setUserData] = useState("")
const base_url=import.meta.env.VITE_BASE_URL
const navigate = useNavigate()
  const handleChange= (e)=>{
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
        let response = await axios.post(`${base_url}/api/login`, userData)
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
        <div className='flex justify-center items-center h-screen pb-12'>
        <div className='border-t-indigo-400 border-2 shadow-xl rounded-lg bg-white border-iris px-12 py-10 flex justify-center items-center flex-col'>
          <h3 className='text-2xl font-semibold'>User Login</h3>
          <form onSubmit={handleSubmit}   >
            <Input type='email' className='my-2' label="Email" name='email' placeholder="email" onChange={handleChange}/>
            <Input type='password' label="Password" name='password' placeholder="***********" onChange={handleChange}/>
            <div className='flex justify-center items-center mb-4'>
              <Button type='submit' className='w-40 mt-6 transition transition-all block py-3 px-4 text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg' >login</Button>
            </div>
            <p >Don't have account, Signup <Link to="/register"><span className='underline text-red-400'>here</span></Link></p>
          </form>
          </div>
        </div>
    </>
  )
};

export default Login;