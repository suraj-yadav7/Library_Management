import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongo_uri = process.env.MONGO_URI

const connectDB = async()=>{
    try{
        let connectionInstance = await mongoose.connect(mongo_uri,{
            dbName:'LibraryManagement'
        })
        return connectionInstance.connection.host;
    }
    catch(error){
        // console.log("Error occured while connecting mongoDB: ", error)
        throw error;
    }
};

export default connectDB;
