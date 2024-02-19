import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApp from './card/cardLayout';
import FlipCard from './card/FlipCard';

function App() {
  return (
    <div className="App">
  <CardApp/>
  <FlipCard
        frontContent={<div>Front Content</div>}
        backContent={<div>Back Content</div>}
      />
      
    </div>
    
  );
}

export default App;
