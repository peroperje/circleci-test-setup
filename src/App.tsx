import React from 'react';
import './App.css';

import Header from "./Header";
import Pages from "./Pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <Pages />
      </header>
    </div>
  );
}

export default App;
