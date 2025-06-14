import { useState } from "react";
import Note from "./components/Note"

const AppTest = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')

    const addNote = (event) => {
        event.preventDefault()
        console.log("button clicked", event.target)
    }

    const handleNoteChange = (event) => {
        console.log("note changed", event.target.value)
        setNewNote(event.target.value)
    }
return (
    <div>
        <h1>Notes</h1>
        <ul>
            {notes.map(note => 
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