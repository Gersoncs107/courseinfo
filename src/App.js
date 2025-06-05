
const Header = (props) => {
 return <h1>{props.course}</h1>
}

const Part = (props)  => {
  return (
    <p>{props.name}{props.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of the React library',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'Component state',
      exercises: 14
    }
  ]
  // const part1 = 'Fundamentals of the React library'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'Component state'
  // const exercises3 = 14

  // const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content />    
      <Total total={total}/>
    </div>
  )
}

export default App