import jwt from 'jsonwebtoken'

export const authorization =async(req, res, next)=>{
    
try{
    let token = req.headers['authorization'].split(" ")[1]
    let adminRole = req.body.isAdmin
    let verifyToken = await jwt.verify(token, process.env.JWT_SECRET, (err, decode)=>{
        console.log("decode: ", decode)
        if(err){
            return res.status(400).json({status:false, message:"Not Authorized"})
        }
        else{
            if(adminRole){
                next()
            }
            else{
                console.log("You are not admin")
                return res.status(400).json({status:false, message:"Your Are Not Admin"})
            }
        }
    })
}
catch(error){
    console.log("Error occured at Authorization: ", error)
    return res.status(400).json({status:false, message:"Erroe while authorizing"})
}

}