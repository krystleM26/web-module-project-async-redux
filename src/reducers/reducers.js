import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../components/actions/WeatherActions"

const initialState = {
  weather: {
    id: '',
    main: '',
    descriptions: '',
    name: '',
    sunrise: '',
    sunset: '',
  },
  isFetching: 'false',
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_START:
          return{

              ...state,
              weather: {},
              isFetching: true,
              error:''
          }

        case FETCH_FAIL:
            return {
                ...state,
                weather:{},
                isFetching: false,
                error: action.payload
            }
            case FETCH_SUCCESS:
                return {
                    ...state,
                    weather: action.payload,
                    isFetching: false,
                    error: ''
                }
          
    default:
      return state
  }
}

export default reducer
