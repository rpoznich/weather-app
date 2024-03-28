"use client";
import React, { useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import './Beaches.gif'

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const weatherBackgrounds: { [key: string]: string } = {
    Sunny: '/Beaches.gif',
    Clouds: '/cloudy.jpg',
    Rain: '/rainy.jpg',
    Snow: '/snowy.jpg',
    // This allows for any string key to be used
  };

  const handleSearch = async () => {
  const data = await fetchWeather(city);
  if (data) {
    setWeather(data); // Assuming data is not null and is the expected object format.
  } else {
    // Handle the null case explicitly. For example, by resetting weather or setting it to a default state
    setWeather('default'); // This line should be fine as long as your state and component properly handle the `null` state.
  }
};

  const backgroundImg: any = './Beaches.gif';

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh', backgroundSize: 'cover' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {weather && (
        <div>
          <h2>{weather}</h2>
          <p>{weather}</p>
          <p>{Math.round(25)}°C</p>
        </div>
      )}
    </div>
  );
}

export default Home