import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';
import JokesData from './components/JokesData';

const App = () => {
const jokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)

  
  return (
    <div>
      {jokeComponents}
    </div>
  );
}
export default App;
