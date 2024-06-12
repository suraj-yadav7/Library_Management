import React, { useState } from "react";
import Input from "../components/Input"
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Signup = ()=>{
    const [userData, setUserData] = useState("")

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
            let response = await axios.post('http://localhost:5000/api/register', userData)
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
            <div className="">
                <ToastContainer/>
                <form onSubmit={handleSubmit}>
                <Input label="full name" className="p-1"  name="name" placeholder="user name" onChange={handelChange} />
                <Input type='email' label="email" name="email" placeholder="email" onChange={handelChange}/>
                <Input type='password' label="password" className="p-1" name="password"  placeholder="password"  onChange={handelChange} />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-300">Signup</Button>
                </form>
                <p>Already has account, login <Link to='/login'><span className="underline text-blue-500">here</span></Link></p>
            </div>
        </>

    )
};
export default Signup;