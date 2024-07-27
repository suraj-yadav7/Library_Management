import React, { useState } from "react";
import Input from "../components/Input"
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Signup = ()=>{
    const [userData, setUserData] = useState("")
    const base_url=import.meta.env.VITE_BASE_URL
    
    const handelChange= (e)=>{
        const {value, name} = e.target
        setUserData({...userData , [name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        registerUser();
    }

    const registerUser = async()=>{
        try{
            let response = await axios.post(`${base_url}/api/register`, userData)
            console.log("response: ", response)
            toast.success(response.data.message)
            setUserData("")
        }
        catch(error){
            console.log("error: ", error.response)
            const {data}=error.response
            toast.warning(data.message)
        }
    };

    console.log("user input: ", userData);
    return (
        <>
            <div className='flex justify-center items-center h-screen pb-12 flex-col '>
                <div className='flex flex-col border-t-indigo-400 border-2 shadow-xl rounded-lg bg-white border-iris px-20 py-10 flex justify-center items-center'>
                <h3 className="text-2xl font-semibold py-4">User Registration</h3>
                <ToastContainer/>
                <form onSubmit={handleSubmit}>
                <Input label="Full name" className="p-1"  name="name" placeholder="name here" onChange={handelChange} />
                <Input type='email' label="Email" name="email" placeholder="example@xyz.com" onChange={handelChange}/>
                <Input type='password' label="Password" className="p-1" name="password"  placeholder="**********"  onChange={handelChange} />
                <div className="flex justify-center items-center ">
                <Button type="submit" className='w-40 mt-6 transition transition-all block py-3 px-4 text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg outline-none' >Signup</Button>
                </div>
                <p className="py-3">Already has account, login <Link to='/login'><span className="underline text-red-500">here</span></Link></p>
                </form>
            </div>
        </div>
        </>

    )
};
export default Signup;