import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistic = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        <td>{props.pros}</td>
      </tr>
        )
}

const Statistics = (props) => {
    const {good, neutral, bad , all, avg, pos, pros} = props

    return (
      <table>
      <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={all}/>
        <Statistic text='average' value={avg}/>
        <Statistic text='positive' value={pos} pros={pros}/>
      </tbody>
      </table>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const setGoodToValue = (value) => setGood(value)
    const setNeutralToValue = (value) => setNeutral(value)
    const setBadToValue = (value) => setBad(value)
    const all = good + neutral + bad
    const avg = (good - bad)/all
    const pos = 100*good/all
    const pros = '%'
    
    if(all===0){
      return (
        <div>
          <h1>give feedback</h1>
          <Button
              handleClick={() => setGoodToValue(good + 1)}
              text='good'
          />
          <Button
              handleClick={() => setNeutralToValue(neutral + 1)}
              text='neutral'
          />
          <Button
              handleClick={() => setBadToValue(bad + 1)}
              text='bad'
          />
          <h1>statistics</h1>
          <p>No feedback given</p>
          
        </div>
      )
    }else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button
            handleClick={() => setGoodToValue(good + 1)}
            text='good'
        />
        <Button
            handleClick={() => setNeutralToValue(neutral + 1)}
            text='neutral'
        />
        <Button
            handleClick={() => setBadToValue(bad + 1)}
            text='bad'
        />
        <h1>statistics</h1>
        
        <Statistics good={good} neutral={neutral} bad={bad} 
        all={all} avg={avg} pos={pos} pros={pros}/>
        
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


