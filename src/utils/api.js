import axios from "axios";



const api = axios.create({
    baseURL:"https://covid-19-statistics.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'fbff61640amsh3a82a794ba39b76p19ec14jsnc12adb5a35bf',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      },
});

export default api;