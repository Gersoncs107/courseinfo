const Person = ({name, number}) => {
  return (
    <div>
      <li>{name} {number}</li>
      <button type="sumbit">Delete</button>
    </div>
    
  ) 
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

export default Persons;