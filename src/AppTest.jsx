import { useState, useEffect } from "react";
import Note from "./components/Note"
import axios from "axios";

const Note = ({note, toggleImportance }) => {
    const label = note.important
    ? 'make not important' : 'make important'
    return(
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

const AppTest = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] =useState(true)

    useEffect(() => {
    console.log('effect (efeito)')
    axios.get('http://localhost:3001/notes').then((response) => {
    console.log('promise fulfilled (promessa resolvida)')
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
        console.log('importance of ' + id + ' needs to be toggled')
    }

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
            <Note key={note.id} note={note}/>
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