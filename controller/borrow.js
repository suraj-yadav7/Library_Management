import { Book } from "../model/BookModel.js"
import { BorrowTransaction } from "../model/BorrowModel.js"
import { User } from "../model/UserModel.js"

// user borrow books
export const borrowBook = async(req, res)=>{
    console.log("borrow: ", req.body)
    try{
        let {userId, bookId} = req.body
        // Book check
        let bookExist = await Book.findById(bookId)
        if(!bookExist){
            return res.status(404).json({status:false, message:"User Not Found"})
        }
        // User check
        let userExist = await User.findById(userId)
        if(!userExist){
            return res.status(404).json({status:false, message:"User Don't Found"})
        }

        if(bookExist.copies<=0){
            return res.status(400).json({status:false, message:'No copies available'})
        }
        bookExist.copies -=1
        await bookExist.save()

        const transaction = await new BorrowTransaction({
            userId, bookId
        })
        transaction.save()
        let transactionId = transaction._id.valueOf()

        bookExist.borrowTrans.push(transactionId)
        userExist.bookBorrow.push(transaction)
        await userExist.save()
        await bookExist.save()
        return res.status(200).json({status:true, message:"Book is borrowed successfully", borrowedData:transaction});

    }
    catch(error){
        console.log("Error Occured while borrowing book: ", error)
        return res.status(500).json({status:false, message:'internal server error at borrowing books'})
    }
};

// User return book
export const returnBook = async(req, res)=>{
    try{
        let {userId, bookId, borrowId} = req.body
        let bookExist = await Book.findById(bookId)
        if(!bookExist){
            return res.status(404).json({status:false, message:"User Not Found"})
        }
        // User check
        let userExist = await User.findById(userId)
        if(!userExist){
            return res.status(404).json({status:false, message:"User Don't Found"})
        }
        
        bookExist.copies +=1
        bookExist.save();
        //Previous borrow transaction check
        let transaction = await BorrowTransaction.findById(borrowId)
        if(!transaction){
            return res.status(404).json({status:false, message:"User Borrow History Not Found"})
        }
        transaction.returnedAt=Date.now()
        transaction.save()
        return res.status(200).json({status:true, message:"Book is returned successfully", returnedBookData:transaction})
    }
    catch(error){
        console.log("Error Occured while retruning book: ", error)
        return res.status(500).json({status:false, message:'internal server error at retruning books'})
    }
};

// user borrowing history
export const borrowHistory = async(req, res)=>{
    try{
        const {userId}=req.body
        let userExist = await User.findById(userId).populate({
            path:'bookBorrow',
        })
        if(!userExist){
            return res.status(404).json({status:false, message:"User Don't Found"})
        }
        console.log("borrow history: ", userExist)
        return res.status(200).json({status:true, message:'User Borrow history fetched', history:userExist.bookBorrow})
    }
    catch(error){
        console.log("Error Occured while borrow history book: ", error)
        return res.status(500).json({status:false, message:'internal server error at borrow history'})
    }
};

// all book availability 
export const bookAvailabilitySummary = async (req, res) => {
    try {
        const books = await Book.aggregate([
            {
                $group: {
                    _id: '',
                    totalBooks: { $sum: 1 },
                    totalBookCopies: { $sum: "$copies" }
                }
            },
            {
                $project: {
                    totalBooks: 1,
                    totalBookCopies: 1,
                    // totalBorrowed: { $subtract: ["$totalBooks", "$totalAvailable"] }
                }
            }
        ]);

        return res.status(200).json({ status: true, books: books[0] });
    } catch (error) {
        console.error("Error while fetching book availability summary: ", error);
        return res.status(500).json({ status: false, message: "Internal Server Error at book avaliablity" });
    }
};


