import { useState } from 'react'

const Header = (props) => {
 return <h1>{props.course}</h1>
}

const Part = (props)  => {
  return (
    <p>{props.part}{props.exercises}</p>
  )
}

const Content = () => {
  return(
    <div>
      <Part part="Fundamentals of the React library " exercises={10} />
      <Part part="Using props to pass data " exercises={7} />
      <Part part="Component state " exercises={14} />
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
  const part1 = 'Fundamentals of the React library'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'Component state'
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content/>    
      <Total total={total}/>
    </div>
  )
}

export default App