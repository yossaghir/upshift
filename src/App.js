import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="app-header bg-custom-col1">
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer className="bg-custom-col1">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
