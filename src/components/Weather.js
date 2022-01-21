import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getWeather, fetchFail, FETCH_FAIL } from './actions/WeatherActions'

const Weather = ({weather, isFetching, error, dispatch}) => {


useEffect(()=> {
    dispatch(getWeather());
}, []);


if (error) {
    return <h3>{error}</h3>
}
if (isFetching) {
    return <h2>Getting Today's Forecast</h2>
}

const handleForecast = (e) => {
   dispatch(getWeather());
   
  }


    return (
        <div className='weather-container'>
        <nav className="navBar">

      
    
            <h1> The Weather App</h1>
      <div>
      <button onAuxClick={handleForecast}>Todays's Forecast</button>
      <button>Weather News</button>
      </div>
      <input 
      type="text"
      name= "name"
      placeholder='Search City, State, County or airport'
      />
      </nav>

     
 


        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Weather);