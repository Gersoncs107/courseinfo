import Course from "./components/Course"
import { useState } from 'react'

const Filter = (props) => {
  
}

const Persons = (props) => {
  return <li>{props.name} {props.number}</li>
}

const PersonsForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>Name: <input value={props.newName} onChange={props.handleContact}/></div>
      <div>Number: <input value={props.newNumber} onChange={props.handleNumber}/> </div>
      <div><button type="submit">Add</button></div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const filterContact = (event) => {
    const filterValue = event.target.value.toLowerCase()
    console.log('Filter value:', filterValue)
    const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filterValue) || 
    person.number.includes(filterValue)
    )
    console.log('Filtered persons:', filteredPersons)
    setPersons(filteredPersons)
  }

  const addContact = (event) => {
    event.preventDefault()
    console.log('Add Contact')
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    if(persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    if(newName === '' || newNumber === '') {
      alert('Name and number cannot be empty')
      return
    }

    setPersons(persons.concat(contactObject))
    setNewName('')
    setNewNumber('')
    console.log(newName, newNumber)
  }

  const handleContact = (event) => {
    setNewName(event.target.value)  
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterContact}/>
      </div>
      <h2>Add a new</h2>
      <PersonsForm 
        onSubmit={addContact}
        newName={newName}
        handleContact={handleContact}
        newNumber={newNumber}
        handleNumber={handleNumber}
      /> 
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Persons key={person.name} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App
