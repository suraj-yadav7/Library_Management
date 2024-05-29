import jwt from 'jsonwebtoken'

export const authorization =async(req, res, next)=>{
    
try{
    let authToken=req.headers['authorization']
    if(authToken){
    let token = req.headers['authorization'].split(" ")[1]
    await jwt.verify(token, process.env.JWT_SECRET, (err, decode)=>{
        if(err){
            return res.status(400).json({status:false, message:"Not Authorized"})
        }
        else{
            let isAdmin = decode.user.isAdmin
            if(isAdmin){
                next()
            }
            else{
                console.log("You are not admin")
                return res.status(400).json({status:false, message:"Your Are Not Admin"})
            }
        }
    })
}
    else{
        return res.status(400).json({status:false, message:"Need Authorizaton token to perform task"})
    }
}
catch(error){
    console.log("Error occured at Authorization: ", error);
    return res.status(400).json({status:false, message:"Erroe while authorizing"})
}
}