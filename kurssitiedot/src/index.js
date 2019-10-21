import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    console.log(props)
    return <h1>{props.course.name}</h1>
}

const Part = (props) => {
    return(
        <div>
            <p>
            {props.part} {props.num}
            </p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return(
        <div>
            <Part part={props.course.parts[0].name} num={props.course.parts[0].exercise}/>
            <Part part={props.course.parts[1].name} num={props.course.parts[1].exercise}/>
            <Part part={props.course.parts[2].name} num={props.course.parts[2].exercise}/>
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>
               Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise} 
            </p>
        </div>
    )
    
}

const App = () => {
    const course = {
        name:'Half Stack application development',
        parts:  [
        {
            name: 'Fundamentals of React',
            exercise: 10
        },
        {
            name: 'Using props to pass data',
            exercise: 7
        },
        {
            name:'State of a component',
            exercise: 14
         }
        ]
}    
    return (
      <div>
        <Header course={course} />
        <Content course = {course}/>
        <Total course={course}/>
      </div>
    )
  }
  


ReactDOM.render(<App />, document.getElementById('root'));

