import { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
export default function Home() {
  const [weather, setWeather] = useState({})
  const [query, setQuery] = useState('')
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery('')
    }
  }

  return (
    <>
      <div className=" flex justify-center p-7">
        <div className="">
          <input type="text"
          placeholder="Enter a city..."
          className=" border-2"
          value={query}
          onChange={
            (e) => {
              setQuery(e.target.value)
            }
          }
          onKeyUp={
            search
          }
        />
        <br />
        <button className=" bg-blue-600" >Bruh</button>
        </div>
      </div>
      <div className=" flex justify-center">
        { weather.main && (
          <div>
            <p>Country: {weather.sys.country} </p>
            <p>Temp: {weather.main.temp} </p>
            <p>Visibility: {weather.visibility} </p>
          </div>
          
        ) }
      </div>
    </>
  )
}
