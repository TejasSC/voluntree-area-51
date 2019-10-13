import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <Map width={400} height={400} latitude={37.7577} longitude={-122.4376}/>
  
    </div>
  );
}

export default App;
