import React, { useState, useRef } from 'react';
import './BackgroundSound.css';

const BackgroundSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log('🎶 Ambient sound is now playing.');
        })
        .catch((error) => {
          console.warn('⚠️ Autoplay blocked or failed:', error.message);
          alert('Click the page or button again to enable sound.');
        });
    }
  };

  return (
    <div className="sound-player">
      <audio ref={audioRef} loop>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_254d2f0567.mp3?filename=calm-ambient-background-11215.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay}>
        {isPlaying ? '⏸ Pause Ambient Sounds' : '▶ Play Ambient Sounds'}
      </button>
    </div>
  );
};

export default BackgroundSound;










