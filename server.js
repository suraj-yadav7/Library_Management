import express from 'express'
import colors from "colors"
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db.js'
import userRouter from './route/userRoute.js'
import bookRouter from './route/bookRoute.js'

const app = express()

dotenv.config()
const port = process.env.PORT
const MODE = process.env.NODE_MODE

// Connect mongodb
connectDB()
.then((val)=> {
    console.log(`MongoDB Connected: ${val}`.bgGreen.white)
    // Hosting server only when mongodb connected
    app.listen(port || 4000, ()=>{
        console.log(`Server is running in ${MODE} at: ${port}`.bgBlue.white)
    });
})
.catch((error)=>{
    console.log(`MongoDB failed To Connect: ${error}`.bgRed.white)
});

// sample response on hosted server
app.get('/', (req, res)=>{
    res.send("<h3>Library Management System</h3>")
});

// to know which api is hit
app.use(morgan('dev'));

// parse req,body content into json
app.use(express.json())

const corsOption={
    origin:'*',
    methods:['GET',"POST", "PUT", "DELETE"],
    credentials:true,
    optionSuccessStatus:200
};
app.use(cors(corsOption))
app.use('/api', userRouter);
app.use('/api', bookRouter);



