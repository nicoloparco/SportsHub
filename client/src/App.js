import React from 'react';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Game from "./components/Game"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Main">
      <Main />
      </div>
      <Game />
      <Footer />
    </div>
  );
}

export default App;
