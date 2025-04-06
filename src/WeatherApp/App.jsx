import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import '../App.css';

const API_KEY = 'YOUR_API_KEY_HERE'; 

const App = () => {
  const [city, setCity] = useState('Delhi');
  const [query, setQuery] = useState('Delhi');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          setWeatherData(null);
        }
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setQuery(city);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>

      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>No weather data found. Try a different city.</p>
      )}
    </div>
  );
};

export default App;
