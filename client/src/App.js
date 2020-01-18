import React from 'react';
import Nav from "./components/Nav"
import Articles from "./components/Articles"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Articles">
      <Articles />
      </div>
      <Footer />
    </div>
  );
}

export default App;
