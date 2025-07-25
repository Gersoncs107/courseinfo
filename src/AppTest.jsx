import React, { useState, useEffect } from "react";
import { usezNote} from "./components/Note"
import axios from "axios";
import {Note, Notification} from "./components/Note";
import noteService from './services/notes'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return(
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const AppTest = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] =useState(true)
    const [errorMessage, setErrorMessage] = useState('Some error happened...')

    useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5
        }

        noteService.create(noteObject)
        .then((returnedNote) => {
            setNotes(notes.concat(returnedNote))
            setNewNote('')
        })

    }

    const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }).catch(error => {
        setErrorMessage(
          `Note ${note.content} was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNotes(notes.filter( n => n.id !== id))
      })
  }
  
    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter( note => note.important === true)

return (
    <div>
        <h1>Notes</h1>
        <Notification message={errorMessage}/>
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
        <Footer/>
    </div>
    )        
}

export default AppTest;