import { useState, useEffect } from "react";
import { Api_Weather } from "../services/index";

export const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    //Devuelve una promesa!!
    Api_Weather({ capital }).then((data) => {
      setWeather((w) => [...w, data.current]);
    });
  }, [capital]);
  return (
    <>
      {weather.map((e, index) => {
        return (
          <span key={index}>
            <p>
              <strong>Temperature</strong>
              <span> {e.temperature}</span> Celsius
            </p>
            <img src={e.weather_icons[0]} alt="" />
            <br />
            <p>
              <strong>Wind</strong>
              <span> {e.wind_speed}</span> mph <span>{e.wind_dir}</span>
            </p>
          </span>
        );
      })}
    </>
  );
};
