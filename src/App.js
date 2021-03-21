import React, { useState } from 'react';
import './App.css';

const api = {
  key: "82047cd306c66f2821bcd32c4ca6648d",
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
      setWeather(result)
      setQuery('');
      console.log(result);
    });
  }

  return (
    <div className="app">
      <h1 className="app__h1">Weather App</h1>
      <div className="container">
        {/* <InputBox /> */}
        <div className="inputBox">
            <input 
            placeholder="Enter city"
            onChange={e => setQuery(e.target.value)}
            value={query}
            />
            <br />
            <button
              onClick={handleSearch}
            >
              Search
            </button>
        </div>
        {( typeof weather.main != "undefined") ? (
        <div className="weather__container">
          <h2>{weather.name}</h2>
          <h3>{weather.weather[0].main}</h3>
          <div className="weatherTemp__container">
            <p>Temp:{" "}{Math.round(weather.main.temp)}°c</p>
            <p>Min Temp:{" "}{Math.round(weather.main.temp_min)}°c</p>
            <p>Max Temp:{" "}{Math.round(weather.main.temp_max)}°c</p>
          </div>
        </div>
        ) : ( ' ' )}
      </div>
      
    </div>
  );
}

export default App;
