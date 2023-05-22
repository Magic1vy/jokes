import React, { useState } from 'react';

const JokeButton = () => {
    const [joke, setJoke] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
  
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        const jokeText = `${data.setup} ... ${data.punchline}`;
        setJoke(jokeText);
    
        const voiceRssUrl = `http://api.voicerss.org/?key=4ce74e137c2e4ee7ad533c835922da2b&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${jokeText}`;
        const audio = new Audio(voiceRssUrl);
  
        setIsPlaying(true); 
  
        audio.onended = () => {
          setIsPlaying(false);
          setJoke(''); 
        };
  
        audio.play();
      } catch (err) {
        console.error('Error', err);
      }
    };
  
    return (
      <div id="joke-container">
        <div id="joke" >
          <button onClick={fetchJoke} disabled={isPlaying}>Get a joke</button>
          <p className={!isPlaying ? 'fade-out' : ''}>{joke}</p>
        </div>
      </div>
    );
  };
  
  export default JokeButton;