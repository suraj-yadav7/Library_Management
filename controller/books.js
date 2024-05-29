import { Book } from "../model/BookModel.js"

export const addBooks = async(req, res)=>{
    try{
        let isbn = req.body.ISBN
        let bookExist = await Book.findOne({ISBN:isbn})
        console.log("book exist: ", bookExist)
        if(!bookExist){
            let newBook = await new Book({
                bookTitle:req.body.bookTitle,
                author:req.body.author,
                ISBN:req.body.ISBN,
                publicationDate:req.body.publicationDate,
                genre:req.body.genre,
                copies:req.body.copies
            })
            let bookAdded = await newBook.save()
            return res.status(200).json({status:true, message:"Book is added successfully" , bookDetails:bookAdded})
        }
        else{
            return res.status(400).json({status:false, message:'Book already exist'})
        }
    }
    catch(error){
        return res.status(500).json({status:false, message:'Need necessary fields of book'})
    }
}


export const getBooks = async(req, res)=>{
    try{
        let fewBooks = await Book.find().limit(5)
        res.status(200).json({status:true, message:'fetched first 5 Books found', booksList:fewBooks})
    }
    catch(error){
        return res.status(500).json({status:false, message:'Internal Server Error'})
    }
}


export const updateBook = async(req,res)=>{
    try{
        let {bookId, bookData} = req.body
        console.log("update: ", bookData)
        let bookExist = await Book.findById(bookId)
        if(bookExist){
            let bookUpdated = await Book.findByIdAndUpdate(bookId,
                {$set:bookData},
                {new:true, runValidators:true}
            )
            console.log("original book: ", bookExist)
            console.log("updated book", bookUpdated)
            return res.status(200).json({status:true, message:"Book is Updated" , updatedBook:bookUpdated})
        }
        else{
            return res.status(404).json({status:false, message:"No Book Found"})
        }
    }
    catch(error){
        return res.status(500).json({status:false, message:"Error while removing book"})
    }
}

export const removeBook = async(req,res)=>{
    try{
        let {bookId} = req.body
        let bookExist = await Book.findById(bookId)
        if(bookExist){
            let deleteBook = await Book.findByIdAndDelete(bookId)
            return res.status(200).json({status:true, message:"Book is Removed"})
        }
        else{
            return res.status(404).json({status:false, message:"No Book Found"})
        }
    }
    catch(error){
        return res.status(500).json({status:false, message:"Error while removing book"})
    }
}
