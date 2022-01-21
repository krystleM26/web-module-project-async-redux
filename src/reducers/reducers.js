import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH_START,
} from '../components/actions/WeatherActions'

const initialState = {
    name: '',
  weather: [],
  main: {
    temp: '',
    feels_like: '',
    temp_min: '',
    temp_max: '',
  },
  isFetching: 'false',
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        weather: {},
        isFetching: true,
        error: '',
      }

    case FETCH_FAIL:
      return {
        ...state,
        weather: {},
        isFetching: false,
        error: action.payload,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        main: action.payload.main,
        weather: action.payload.weather[0],
        isFetching: false,
        error: '',
      }

    default:
      return state
  }
}

export default reducer
