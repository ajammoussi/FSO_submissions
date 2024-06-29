import { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({country}) => {
    const [fetchedWeather, setFetchedWeather] = useState([]);

    useEffect(() => {
        const key = import.meta.env.VITE_WEATHER_API_KEY
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${key}&units=metric`)
        .then(response => {
            console.log(response.data)
            console.log(`Current temperature in ${country.capital[0]} is ${response.data.main.temp}℃`);
            setFetchedWeather([response.data])
        }).catch(error => {
            console.log(error);
        })
    })

    if (fetchedWeather.length > 0) {
        const weather = fetchedWeather[0];
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital[0]}<br/>
                area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img 
                    src={country.flags.png} 
                    alt={country.flags.alt} 
                    width="200" 
                    style={{border: "0.5px solid black"}}
                />
                <h3>Weather in {country.capital[0]}</h3>
                <p>temperature: {weather.main.temp}℃</p>
                <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description} 
                    width="100" 
                />
                <p>wind: {weather.wind.speed} m/s direction {weather.wind.deg}</p>
            </div>
        )
    }

    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}<br/>
            area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {/* iterate over the languages object and display the language names */}
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
                
            </ul>
            <img 
                src={country.flags.png} 
                alt={country.flags.alt} 
                width="200" 
                style={{border: "0.5px solid black"}}
            />
        </div>
    )
}

export default Country;
