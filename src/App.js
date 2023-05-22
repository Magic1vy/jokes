import React from 'react';
import JokeButton from './JokeButton';
import video from './assets/159949.mp4';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={video} type="video/mp4" />
      </video>
      
      <JokeButton />
    </div>
  );
}

export default App;
