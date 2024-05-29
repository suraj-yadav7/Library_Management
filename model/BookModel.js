import mongoose, { mongo } from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        bookTitle:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        ISBN:{
            type:String,
            required:true
        },
        publicationDate:{
            type:String,
            required:true
        },
        genre:{
            type:String,
            default:'novel'
        },
        copies:{
            type:Number,
            default:1
        }
    },{timestamps:true}
)

export const Book = mongoose.model("books", BookSchema)