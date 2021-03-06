import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const setToValue = (value) => setSelected(value)
    const points = props.points

    console.log(Math.floor(Math.random()*6))
    
    console.log(points)
    
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}
        
        </p>
        <p>has {points[selected]} votes</p>
        <Button handleClick={() => points[selected]+=1} 
        text='vote' />
        <Button handleClick={() => setToValue(Math.floor(Math.random()*6))}
        text='next anecdote'
         />
        <h1>Anecdote with the most votes</h1> 
        <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p> 
        <p>has {Math.max(...points)} votes</p>
      </div>
    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const points = [0,0,0,0,0,0]

ReactDOM.render(<App anecdotes={anecdotes} points={points}/>, document.getElementById('root'));

