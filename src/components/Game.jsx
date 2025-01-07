// src/components/Game.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importar Framer Motion

const Game = ({ letters, time, onEndGame }) => {
  const [currentTime, setCurrentTime] = useState(time);
  const [activeLetters, setActiveLetters] = useState([...letters]);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let timerId;
    if (gameActive) {
      if (currentTime > 0) {
        timerId = setInterval(() => {
          setCurrentTime((prev) => prev - 1);
        }, 1000);
      } else {
        // Introducir un retraso de 1 segundo antes de mostrar la alerta
        const timeoutId = setTimeout(() => {
          alert('¡Tiempo terminado! Iniciando nueva ronda.');
          setCurrentTime(time);
          // Opcional: Reiniciar las letras activas si es necesario
          setActiveLetters([...letters]);
        }, 1000); // Retraso de 1 segundo

        return () => clearTimeout(timeoutId); // Limpiar el timeout si el efecto se reejecuta o el componente se desmonta
      }
    }
    return () => clearInterval(timerId);
  }, [gameActive, currentTime, time, letters]);

  useEffect(() => {
    // Iniciar el temporizador automáticamente al montar el componente
    setGameActive(true);
  }, []);

  const handleLetterClick = (letter) => {
    // Desactivar la letra seleccionada
    setActiveLetters((prev) => prev.filter((l) => l !== letter));
    // Reiniciar el temporizador
    setCurrentTime(time);
  };

  const progressPercentage = ((time - currentTime) / time) * 100;

  // Función para determinar el color de la barra según el progreso
  const getProgressColor = (percentage) => {
    if (percentage < 50) {
      return 'bg-green-500'; // Verde para menos del 50%
    } else if (percentage < 80) {
      return 'bg-yellow-500'; // Amarillo para entre 50% y 80%
    } else {
      return 'bg-red-500'; // Rojo para más del 80%
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-3xl p-6 transition-colors duration-300">
        {/* Título del Juego */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
          ¡Juego en Progreso!
        </h2>

        {/* Barra de Progreso */}
        <div className="flex flex-col items-center justify-center mb-6 w-full">
          {/* Barra de fondo */}
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-6">
            {/* Barra de progreso */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1 }}
              className={`${getProgressColor(progressPercentage)} h-6 rounded-full`}
            ></motion.div>
          </div>
        </div>

        {/* Selección de Letras */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-center text-gray-700 dark:text-gray-300 mb-4">
            Selecciona una letra:
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {activeLetters.map((letter) => (
              <motion.button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                whileTap={{ scale: 0.95 }}
                className={`${
                  !activeLetters.includes(letter)
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700'
                } text-white font-semibold py-2 px-4 rounded-lg shadow transition transform hover:scale-105 focus:outline-none text-lg sm:text-xl`}
                disabled={!activeLetters.includes(letter)}
                aria-label={`Seleccionar letra ${letter}`}
              >
                {letter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Botón para Terminar el Juego */}
        <div className="flex justify-center">
          <motion.button
            onClick={onEndGame}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-red-500 dark:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-600 dark:hover:bg-red-700 transition transform hover:scale-105 focus:outline-none"
            aria-label="Terminar Juego"
          >
            Terminar Juego
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Game;
