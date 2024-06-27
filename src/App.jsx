import './App.css'
import React, { useState } from 'react';
import TableView from './componets/TableView'

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };
  
  // Example data
  const students = [
    { id: 1, name: 'Jay', percentage: 88 },
    { id: 2, name: 'Jatin', percentage: 85 },
    { id: 3, name: 'Jayesh', percentage: 60 }
  ];

  
   
  

  return (
    <>
      <h1>Students Percentage Table</h1>
      <TableView students={students} />
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </>
  );
};

export default App;