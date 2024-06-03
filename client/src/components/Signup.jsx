import React, { useState } from "react";
import Input from "../components/Input"
import Button from "./Button";
import { Link } from "react-router-dom";
const Signup = ()=>{
    const [userData, setUserData] = useState("")

    const handelChange= (e)=>{
        const {value, name} = e.target
        setUserData({...prev , [name]:value})
    }
    const handleSubmit=()=>{
        registerUser();
    }

    const registerUser = ()=>{

    };

    return (
        <>
            <div className="">
                <form onSubmit={handleSubmit}>
                <Input label="full name" className="p-1" placeHolder="user name" onChange={handelChange} />
                <Input type='password' label="password" className="p-1" placeHolder="password"  onChange={handelChange} />
                <Input type='email' label="email" placeHolder="email" onChange={handelChange}/>
                <Button className="bg-blue-500 hover:bg-blue-300">Signup</Button>
                </form>
                <p>Already has account, login <Link to='/login'><span className="underline text-blue-500">here</span></Link></p>
            </div>
        </>

    )
}

export default Signup;