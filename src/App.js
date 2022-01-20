import React from 'react';
import './App.css';

const handleSearch = (e) => {
  e.preventDefault()
  return (
    "Search"
  )
}

function App() {
  return (
    <div className="App">
      <nav className="navBar">

      <h1> The Weather App</h1>
      <div>
      <button>Todays's Forecast</button>
      <button>Weather News</button>
      </div>
      <input 
      type="text"
      name= "name"
      onClick={handleSearch}
      placeholder='Search City, State, County or airport'
      />

      </nav>
    </div>
  );
}

export default App;