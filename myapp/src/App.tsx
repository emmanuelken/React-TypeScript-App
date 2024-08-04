import React from 'react';
import './App.css';
import Counter from './project/scripts';
import Greeting from './project/script';

const name: string = "KEN"

function App() {
  return (
    <div className="App">
      <Counter/>
      <Greeting name={name}/>
    </div>
  );
}

export default App;
