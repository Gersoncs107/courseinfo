const Person = ({name, number, onclick}) => {
  return (
    <li>
      {name} {number}
      <button type="submit" onClick={onclick}>Delete</button>
    </li>
  ) 
}

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id} name={person.name} number={person.number}
        onclick={() => onclick(person.id)}/>
      )}
    </ul>
  )
}

export default Persons;