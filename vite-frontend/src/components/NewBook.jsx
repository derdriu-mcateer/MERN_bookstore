import React, { useState } from 'react'
import '../CSS/NewBook.CSS'

const NewBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const handelSubmit = async (event) => {
        event.preventDefault()

        const book = {title, author, genre, description}

        const response = await fetch('http://localhost:5555/books/', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        } else {
            setTitle('')
            setAuthor('')
            setDescription('')
            setGenre('')
            setError(null)
            console.log('Book added')
        }
    }

  return (
    <form className="create" onSubmit={handelSubmit}>
        <h3>Add a New Book</h3>
        <label>Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

        <label>Author:</label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author}/>

        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} value={genre}/>

        <label>Description:</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

        <button>Add Book</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default NewBook