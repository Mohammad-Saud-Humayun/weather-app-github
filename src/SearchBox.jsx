import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import "./SearchBox.css"
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "2ef22d8bf3e8eaf5a1cbbb33b58cbbfc"

    let getWeatherInfo = async () => {

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        }
        catch (err) {
            throw err;
        }

    }

    let handleChange = async (e) => {
        setCity(e.target.value)
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setCity("")
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }

        catch (err) {
            setError(true)
        }
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="City Name"
                    variant='outlined'
                    type='search'
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br /> <br />
                <Button
                    variant='contained'
                    color='primary'
                    type='submit'

                >Search</Button>
                {error && <h4 style={{color:"red"}}>No such city exist!</h4>}
            </form>

        </div>
    )
}