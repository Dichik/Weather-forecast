export type WeatherData = {
    weather_main: string;
    weather_description: string;
    main_temp: string;
    wind_speed: string;
}

export const getWeatherData = async (name: string): Promise<WeatherData> => {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=68b90f1a5d1ab11e8815b02923f7c5dc`;
    const data = await (await fetch(endpoint)).json();

    let weather_main: string = data.weather[0].main;
    let weather_description: string = data.weather[0].description;
    let main_temp: string = data.main.temp;
    let wind_speed: string = data.wind.speed;

    console.log(data.weather[0].main);

    const res: WeatherData = {
        weather_main,
        weather_description,
        main_temp,
        wind_speed
    };

    return res;
}