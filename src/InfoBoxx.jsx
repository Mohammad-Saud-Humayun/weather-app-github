
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBoxx.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBoxx({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwd2VhdGhyZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1661842705838-ab497074c976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZGF5fGVufDB8fDB8fHww"
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"


    return (

        <div className='InfoBoxx'>
            <br /><br />
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 90
                                ? RAIN_URL
                                : info.temp > 20
                                ? HOT_URL
                                : COLD_URL
                            }

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;{
                            info.humidity > 90
                                ? <ThunderstormIcon/>
                                : info.temp > 20
                                ? <LightModeIcon/>
                                : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Min Temperature = {info.temp_max}&deg;C</p>
                            <p>Max Temperature = {info.temp_min}&deg;C</p>
                            <p> Humidity= {info.humidity}</p>
                            <p>The Weather is described as <b>{info.weather}</b> and Feels like <b>{info.feels_like}&deg;C</b></p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    )
}
