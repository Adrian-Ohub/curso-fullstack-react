import { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./components/Country";
import { Show } from "./components/Show";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [searchCountries, setSearchCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handlerInput = (event) => {
    setNewCountry(event.target.value);
    const findCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchCountries(findCountries);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  const handlerShow = (props) => {
    setNewCountry(props.name);
    const findCountries = countries.filter((country) =>
      country.name.toLowerCase().match(props.name.toLowerCase())
    );
    setSearchCountries(findCountries);
  };

  return (
    <>
      <h1>Search of Countries</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={newCountry}
          name="country"
          placeholder="Search ..."
          onChange={handlerInput}
        />
      </form>
      <div>
        {searchCountries.length > 10 ? (
          "Too many matches, specify another filter"
        ) : searchCountries.length === 1 ? (
          <Country country={searchCountries} />
        ) : (
          searchCountries.map((e) => (
            <span key={e.name}>
              {e.name} <Show handlerShow={handlerShow} countrySelected={e} />
              <br />
            </span>
          ))
        )}
      </div>
    </>
  );
};

export default App;
