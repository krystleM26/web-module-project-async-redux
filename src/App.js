import React from 'react';
import './App.css';
import Weather from './components/Weather'
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
    <div className='weather-container'>

      <Weather/>
    </div>
    </div>
  );
}

export default App;