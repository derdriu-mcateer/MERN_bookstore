import express from 'express'
import bookRoutes from './routes/book_routes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

  
app.use('/books', bookRoutes)

app.get('/', (req, res) => res.send({ info: 'Bookstore API' }))



app.listen(5555, () => {
    console.log('Server is running on port 5555');
});
