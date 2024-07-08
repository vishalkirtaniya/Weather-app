import "./App.css";
import React, { useState } from "react";
import Weather from "./Weather";
import Search from "./Search";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key= 52a657e22c5f4576976134630240507&q=${city}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (err) {
      setError("Failed to fetch data");
      setWeather(null);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather App
      </Typography>
      <Search getWeather={getWeather} />
      {error && <Alert severity="error">{error}</Alert>}
      {weather && <Weather data={weather} />}
    </Container>
  );
};

export default App;
