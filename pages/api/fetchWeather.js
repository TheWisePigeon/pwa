// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
const url = "https://api.openweathermap.org/data/2.5/weather"
const api_key = "921585cea7f73228acbca5e55ee902d1"


export const fetchWeather =  async (query) =>{
  const { data } = await axios.get(
    url, {
      params: {
        q: query,
        units: 'metric',
        APPID: api_key
      }
    }
  )
  console.log(data);
  return data
}
