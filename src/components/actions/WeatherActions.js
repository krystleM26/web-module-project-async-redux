import axios from 'axios'


export const getWeather = () => () => {
    dispatch(fetchStart());
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=b8f5520314cb278a6925e11aacaf42b7')
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}