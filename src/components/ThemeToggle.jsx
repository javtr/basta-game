// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar la preferencia del sistema al cargar
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
