import { useState } from "react";
import './weather.css'
function Weather()  {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const[Loading,setLoading]= useState("false");
    const API_KEY = "c6e5a5b539195fc4424eb146c1988e33";

    const fetchWeather = async ()=>{
        if(!city) {
            setError("Please enter a city Name")
            return;
            
            }
            setError("");
            setLoading(true);
            try {
                
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
                const data = await res.json();
                setLoading(false);
                if(data.cod === 200)
                {
                    setWeather(data);
    
                }
                else{
                    setError("City not found!");
                    setWeather(null);
                }
            }
            catch(error){
                console.log("Error Fetching  weather",error);
                setError("Something went wrong");
                setLoading(false);
            }
    }
        
    return (
        <>

       <div className="weather-container"> 
        <input
        type="text"
        placeholder="Enter City Name Here"
        value={city}
        onChange={(e)=> {setCity(e.target.value)}}
        />
        <button onClick={fetchWeather}>Get Weather </button>

        {Loading && <p>Loading...</p>} {/* ✅ Show loading */}
            {error && <p className="error">{error}</p>} {/* ✅ Show error */}
        
            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>🌡️ {weather.main.temp}°C</p>
                    <p>☁️ {weather.weather[0].description}</p>
                    <p>💨 Wind: {weather.wind.speed} m/s</p>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                        alt="Weather icon" 
                    />
                </div>
            )}
        </div>
        </>
    );
}
export default Weather;