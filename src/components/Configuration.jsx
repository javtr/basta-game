// src/components/Configuration.jsx
import React, { useState } from 'react';

const Configuration = ({ onStartGame }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [activeLetters, setActiveLetters] = useState(
    alphabet.reduce((acc, letter) => {
      acc[letter] = true;
      return acc;
    }, {})
  );
  const [time, setTime] = useState(10);

  const toggleLetter = (letter) => {
    setActiveLetters((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  const handleStart = () => {
    const selectedLetters = alphabet.filter((letter) => activeLetters[letter]);
    if (selectedLetters.length === 0) {
      alert('Debes seleccionar al menos una letra.');
      return;
    }
    onStartGame({ letters: selectedLetters, time: parseInt(time, 10) });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-3xl p-6 transition-colors duration-300">
        {/* Título de Configuración */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
          Configuración del Juego
        </h2>

        {/* Selección de Letras */}
        <div className="mb-6">
          <h3 className="font-medium mb-3 text-gray-700 dark:text-gray-300">
            Selecciona las letras a utilizar:
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => toggleLetter(letter)}
                className={`px-3 py-1 rounded-full border ${
                  activeLetters[letter]
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
                } hover:bg-blue-600 dark:hover:bg-gray-500 transition transform hover:scale-105`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Configuración del Tiempo */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300" htmlFor="time">
            Configura el tiempo (segundos):
          </label>
          <input
            type="number"
            id="time"
            min="5"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Botón para Iniciar el Juego */}
        <button
          onClick={handleStart}
          className="w-full bg-green-500 dark:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-600 dark:hover:bg-green-700 transition transform hover:scale-105 focus:outline-none"
        >
          Jugar
        </button>
      </div>
    </div>
  );
};

export default Configuration;
