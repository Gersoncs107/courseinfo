import { useState, useEffect } from "react";
import Note from "./components/Note"
import axios from "axios";
import noteService from './services/notes'

const AppTest = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] =useState(true)

     useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5
        }

        axios
        .post('http://localhost:3001/notes/', noteObject)
        .then((response) => {
           setNotes(notes.concat(response.data))
           setNewNote('')
        })

    }

    const toggleImportanceOf = (id)=> {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find( n => n.id === id)
        const changedNote = {...note, important: !note.important}

        axios.put(url, changedNote)
        .then((response) => {
            setNotes(notes.map( n => n.id !== id ? n : response.data))
        })
    }

    noteService
    .update(id, changedNote)
    .then((response) => {
        setNotes(response.data)
    })

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter( note => note.important === true)

return (
    <div>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                Show {showAll ? 'Important' : 'all'}
            </button>
        </div>
        <ul>
            {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
        </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>

    </div>
    )        
}

export default AppTest;