import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "./App.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const api = {
  key: "82047cd306c66f2821bcd32c4ca6648d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  };

  return (
    <div className="app">
      <div className="navbar">
        <MenuIcon />
        <h3>Weather App</h3>
      </div>
      <div className="weather__Inputcontainer">
        <input 
          type="text" 
          placeholder="Search City"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          />
        <Button 
          className="weather__searchIcon"
          onClick={handleSearch}>
            SEARCH
        </Button>
      </div>
      {typeof weather.main != "undefined" ? (
      <div className="weather__data">
        <Card className="weather__card">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="weather__cardHeader">
                {weather.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Temperature: <span style={{fontWeight: '700', color:'black'}}>{Math.round(weather.main.temp)}°c</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Min Temp: <span style={{fontWeight: '700', color:'black'}}>{Math.round(weather.main.temp_min)}°c</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Max Temp: <span style={{fontWeight: '700', color:'black'}}>{Math.round(weather.main.temp_max)}°c</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Country: <span style={{fontWeight: '700', color:'black'}}>{(weather.sys.country)}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default App;
