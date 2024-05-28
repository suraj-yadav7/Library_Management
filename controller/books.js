export const addBooks = async(req, res)=>{
    console.log("booked added")
    return res.status(200).json({status:true, message:"Book is added successfully"})
}