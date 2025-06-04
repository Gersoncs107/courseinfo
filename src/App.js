import { useState } from 'react'

const Header = (props) => {
 return <h1>{props.course}</h1>
}

const Content = () => {

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
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <Total/>
    </div>
  )
}

export default App