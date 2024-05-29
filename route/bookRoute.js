import express from 'express'
import { addBooks, removeBook, updateBook, getBooks } from '../controller/books.js'
import { authorization } from '../middlewear/authorization.js'
const bookRouter = express.Router()

bookRouter.post("/add-book", authorization, addBooks)
bookRouter.get('/get-book', authorization, getBooks)
bookRouter.put("/update-book", authorization, updateBook)
bookRouter.delete("/delete-book", authorization, removeBook)

export default bookRouter;