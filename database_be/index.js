import express from 'express'
import { BookListModel } from './database.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'Bookstore API' }))

app.get('/', async (req, res) => res.send(await BookListModel.find()))

app.listen(5555, () => {
    console.log('Server is running on port 5555');
});