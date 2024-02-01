import {Router} from 'express'
import { BookModel } from '../database.js'

const router = Router()

// Get all books
router.get('/', async (req, res) => {
    res.send(await BookModel.find())
})

// Get book by ID
router.get('/:id', async (req, res) => {
    const book = await BookModel.findById(req.params.id)
    if (book) {
        res.send(book)
    } else {
        res.status(404).send({error: 'Book not found'})
    }
})

// Create a new book
router.post('/', async (req, res) => {
    try{
        const newBook = await BookModel.create(req.body)
        res.status(201).send(newBook)
    } catch (error){
        res.status(500).send({error: error.message})
    }
})

// Update a book 
router.put('/:id', async (req, res) => {
    try{
        const updatedBook = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (updatedBook) {
            res.send(updatedBook)
        } else {
            res.status(404).send({error : 'Book not found'})
        }
    } catch (error){
        res.status(500).send({error: error.message})
    }
})

// Delete a book 
router.delete('/:id', async (req, res) => {
    try{
        const deleteBook = await BookModel.findByIdAndDelete(req.params.id)
        if (deleteBook) {
            res.status(200).send({success: 'Book deleted successfully'})
        } else {
            res.status(404).send({error : 'Book not found'})
        }
    } catch (error){
        res.status(500).send({error: error.message})
    }
})


export default router