import React, {useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {InputField} from "./Auth/Auth.components";
import {ButtonSubmit} from "./Auth/Auth.components";
import {getWeatherData} from "./API";
import {WeatherData} from "./API";
import './forecast-page.css';

const Forecast: React.FC = () => {
    const [hasForecast, setHasForecast] = useState(false);
    const [cityName, setCityName] = useState('');
    const [weatherInfo, setWeatherInfo] = useState<WeatherData>();

    const showForecast = async () => {
        setHasForecast(true);
        const information = await getWeatherData(cityName);
        setWeatherInfo(information);
    }

    return (
        <Router>
            <h1 className={"forecast"}>Forecast</h1>
            <InputField className={"city-enter"} placeholder={"Enter city"} value={cityName}
    onChange={(e) => setCityName(e.target.value)}/>
            {!hasForecast ? <ButtonSubmit style={{top: "250px"}} onClick={showForecast}>Show Forecast</ButtonSubmit> : null}
            {hasForecast ? (
                <div className={"weather-data"}>
                    <p>Temperature: {weatherInfo?.main_temp}</p>
                    <p>Weather: {weatherInfo?.weather_main}</p>
                    <p>Weather description: {weatherInfo?.weather_description}</p>
                    <p>Wind speed: {weatherInfo?.wind_speed}</p>
                </div>
            ) : null}
            {hasForecast ? <ButtonSubmit style={{top: "400px"}} onClick={showForecast}>Show Again</ButtonSubmit> : null}
        </Router>
    );
}

export default Forecast;