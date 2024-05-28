import express from 'express'
import { addBooks } from '../controller/books.js'
import { authorization } from '../middlewear/authorization.js'
const bookRouter = express.Router()

bookRouter.post("/add-book", authorization, addBooks)

export default bookRouter;