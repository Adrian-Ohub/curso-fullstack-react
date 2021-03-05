import axios from "axios";

export const Api_Countries = () => {
  return axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
    const { data } = response;
    return data;
  });
};
export const Api_Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const query = capital;
  return axios
    .get(
      `http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`
    )
    .then((response) => {
      const { data } = response;
      return data;
    });
};
