import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
   
  ])

  return (
    <div className="App">
      <h1>My Idols</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
