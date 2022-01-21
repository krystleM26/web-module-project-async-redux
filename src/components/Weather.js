import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getWeather, fetchFail, FETCH_FAIL } from './actions/WeatherActions'

const Weather = ({ name, main, weather, weatherApp, isFetching, error, dispatch }) => {

  useEffect(() => {
    dispatch(getWeather())
  }, [])
  console.log('hello');
  console.log(weather)
  console.log(isFetching)
  


  if (error) {
    return <h3>{error}</h3>
  }
  if (isFetching) {
    return <h2>Getting Today's Forecast</h2>
  }

 

  return (
    <div className="weather-container">
      
    <div>
        

        Hello: {name}
        <div>

        Today we will have: {weather.description}

       
        </div>
        Temperature: {main.temp}
        

    </div>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    name: state.name,
    weather:state.weather,
    main: state.main,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps)(Weather)
