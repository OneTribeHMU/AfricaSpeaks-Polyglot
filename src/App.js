import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Languages from './pages/Languages';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <main className="bg-natural-amber dark:bg-deep-amber text-deep-amber dark:text-natural-amber">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
