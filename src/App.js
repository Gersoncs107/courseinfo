const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
    
return (
   <div>
    <Header course= {course}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
   </div> 
  )
}

export default App