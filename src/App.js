import { useState } from 'react'

const Button = () => {

}

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text='Good' value={() => setGood(good + 1)} />
      <StatisticLine text='Neutral' value={() => setGood(neutral + 1)}/>
      <StatisticLine text='Bad' value={() => setGood(bad + 1)}/>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
return (
   <div>
    <h1>Give Feedback</h1>
    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>
    <h1>Statistics</h1>
    {good + neutral + bad === 0 ? (
      <p>No feedback given</p>
    ) : (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Average: {(good - bad) / (good + neutral + bad)}</p>
        <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
      </div>
    )}
   </div> 
  )
}

export default App