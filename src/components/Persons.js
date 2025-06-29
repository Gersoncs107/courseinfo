const Person = ({name, number, onclick}) => {
  return (
    <div>
      <li>{name} {number}</li>
      <button type="sumbit" onClick={onclick}>Delete</button>
    </div>
    
  ) 
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id} name={person.name} number={person.number} onclick={person.onclick}/>
      )}
    </ul>
  )
}

export default Persons;