import React, { useState } from 'react';
// import logo from './logo.svg';
import Like from './Like';
import Person from './Person/Person';
import './App.css';

const App = props => {

  const [personState , setPersonState ] =useState({
    persons : [
      { name: "Manas", age: 22 },
      { name: "Shivam", age: 21 },
    ],
    other : 'This is other state'
  });

  const switchNameHandler = () => {
    setPersonState({
      persons : [
        { name: "manas yadav", age: 23 },
        { name: "shiva", age: 22 }
      ]
    });
    
  };
    
    return (
      <div className="App">
        <h1> Hi i am manas </h1>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>


        //Button from here
        <h2>This is a Like Button</h2>
        <Like/>
        
      </div>
    );
  
}




export default App;
