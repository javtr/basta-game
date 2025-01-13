// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Configuration from './components/Configuration';
import Game from './components/Game';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [gameSettings, setGameSettings] = useState(null);

  const handleStartGame = ({ letters, time }) => {
    setGameSettings({ letters, time });
  };

  const handleEndGame = () => {
    setGameSettings(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* <Header>
        <ThemeToggle />
      </Header> */}
      {gameSettings ? (
        <Game
          letters={gameSettings.letters}
          time={gameSettings.time}
          onEndGame={handleEndGame}
        />
      ) : (
        <Configuration onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
