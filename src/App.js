import React from 'react';
import './App.css';
import Weather from './components/Weather'
import { connect } from 'react-redux'





function App() {
 
  return (
    <div className="App">
   <nav className="navBar">
        <h1> The Weather App</h1>

        <div>
          <button >Todays's Forecast</button>
          <button>Weather News</button>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Search City, State, County or airport"
        />
      </nav>

      <Weather/>
    </div>
   
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps)(App)