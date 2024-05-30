import express from 'express'
import { borrowBook, borrowHistory, returnBook,bookAvailabilitySummary } from '../controller/borrow.js'

const borrowRouter = express.Router()

borrowRouter.post('/borrow-book', borrowBook)
borrowRouter.post('/return-book', returnBook)
borrowRouter.get('/borrow-history', borrowHistory)
borrowRouter.get('/book-availability', bookAvailabilitySummary)

export default borrowRouter;