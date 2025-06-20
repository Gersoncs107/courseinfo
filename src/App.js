import { useState, useEffect } from 'react'

const Filter = (props) => {
  return <div>Filter shown with <input onChange={props.onChange}/></div>
}

const Person = ({name, number}) => {
  return <li>{name} {number}</li>
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id} name={person.name} number={person.number}/>
      )}
    </ul>
  )
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
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setFilteredPersons(
      persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase()) ||
        person.number.includes(filter)
      )
    )
  }, [persons, filter])

  const filterContact = (event) => {
    setFilter(event.target.value)
  };

  const addContact = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
      return;
    }

    if (newName === '' || newNumber === '') {
      alert('Name and number cannot be empty');
      return;
    }

    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    setPersons(persons.concat(contactObject));
    setNewName('');
    setNewNumber('');
    console.log(newName, newNumber);
  };

  const handleContact = (event) => {
    setNewName(event.target.value)  
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterContact}/>
      <h2>Add a new</h2>
      <PersonsForm 
        onSubmit={addContact}
        newName={newName}
        handleContact={handleContact}
        newNumber={newNumber}
        handleNumber={handleNumber}
      /> 
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
