
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;