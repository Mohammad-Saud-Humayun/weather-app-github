import InfoBoxx from "./InfoBoxx";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    let [WeatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        feels_like: 21.59,
        humidity: 49,
        temp: 22.05,
        temp_max: 22.05,
        temp_min: 22.05,
        weather: "haze"
      })

      let updateInfo = (result) =>{
        setWeatherInfo(result)
      }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Mohammad Saud Humayun</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBoxx info={WeatherInfo}/>
        </div>
    )
}