import mongoose from "mongoose";

const BorrowSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    bookId:{
        type:String,
        required:true
    },
    borrowedAt:{
        type:Date,
        default:Date.now()
    },
    returnedAt:{
        type:Date
    }
},{timestamps:true})

export const BorrowTransaction = mongoose.model("borrowTransaction", BorrowSchema);