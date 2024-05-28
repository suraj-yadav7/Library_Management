import bcrypt from "bcrypt";
import {User}  from "../model/UserModel.js";
import jwt  from "jsonwebtoken";


export const userRegister = async(req, res)=>{
    /* Salting and Hashing the Password */
    console.log("req.body: ", req.body.isAdmin)
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    try {
        const email = req.body.email
        let userExist = await User.findOne({email})
        /* Create a new user */
        if(!userExist){
        const newUser = await new User({
            name:req.body.name,    
            email: req.body.email,
            password: hashedPass,
            isAdmin: req.body.isAdmin || false,
            });
            const userCreated = await newUser.save();
            res.status(200).json({status:true, message:'user created successfully', data:userCreated});
        }
        else{
            return res.status(400).json({statu:false, message:"User is already Created"})
        }
        /* Save User and Return */
       
      } catch (error) {
        console.log("Error while creating user:: ", error)
        return res.status(400).json({status:false, message:"Failed to create user"})
      }    
}

export const userLogin = async(req, res)=>{
  const jwtSecretStr = process.env.JWT_SECRET
  let email=req.body.email
  
    try{
        let userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({status:false,message:"User Not Found"})
        }
        const comparePassword= await bcrypt.compare(req.body.password, userData.password) 
        if(!comparePassword){
            return res.status(400).json({status:false, message:"Invalid Credential."})
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const JWTToken=  jwt.sign(data,jwtSecretStr)
        return res.status(200).json({status:true,message:"User found",jwtToken:JWTToken, userid:userData._id})
    }
    catch(err){
        console.log("error while login user :: ", err);
    }
    
}