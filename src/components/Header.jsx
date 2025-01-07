// src/components/Header.jsx
import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold">Juego de Basta</h1>
      {children}
    </header>
  );
};

export default Header;
