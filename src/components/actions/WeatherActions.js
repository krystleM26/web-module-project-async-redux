import axios from 'axios'
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = 'FETCH-FAIL';


export const getWeather = () => (dispatch) => {
    dispatch(fetchStart())
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&appid=b8f5520314cb278a6925e11aacaf42b7')
        .then(resp => {
            console.log(resp.data)
            dispatch(fetchSuccess(resp.data))
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}
export const fetchSuccess = (data) => 
{
    return({type:FETCH_SUCCESS, payload: data })
}

export const fetchFail = () => {
    return ({type:FETCH_FAIL})
}