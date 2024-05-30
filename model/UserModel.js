import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    bookBorrow:[{
        type:mongoose.Types.ObjectId,
        ref:"borrowTransaction"
    }]

},{timestamps:true})

export const User = mongoose.model('user', userSchema)