import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    fetch("/home")
      .then(res => res.json())
      .then(data => console.log(data))

  })
  return (
    <div className="App">
      <h1>Hello, Client!</h1>
    </div>
  );
}

export default App;
