import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Weather.css";

const Weather = ({ data }) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {data.location.name}, {data.location.country}
        </Typography>
        <Typography variant="h5">{data.current.temp_c}°C</Typography>
        <Typography variant="body1">{data.current.condition.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Weather;
