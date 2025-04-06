import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weather[0].main} - {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
