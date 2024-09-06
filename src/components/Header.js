import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-natural-amber dark:bg-deep-amber text-deep-amber dark:text-natural-amber p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AfricanSpeaks Polyglot</h1>
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/languages" className="mx-2">Languages</Link>
          <Link to="/teachers" className="mx-2">Teachers</Link>
          <Link to="/schedule" className="mx-2">Schedule</Link>
          <button onClick={toggleDarkMode} className="ml-4">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
