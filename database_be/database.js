import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
    const m = await mongoose.connect(process.env.DB_URI)
    console.log(m.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect')
}
catch (err) {
    console.error(err)
}

const closeConnection = () => {
    console.log('Mongoose disconnecting ...')
    mongoose.disconnect()
}

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String},
    description: {type: String},
    read: {type: Boolean, required: true, default: false},
  });
  
  const BookModel = mongoose.model('Book', bookSchema);

export {closeConnection, BookModel}