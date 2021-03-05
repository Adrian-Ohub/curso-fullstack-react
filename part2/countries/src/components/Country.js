import { Weather } from "../components/Weather";
export const Country = ({ country }) => {
  let { name, capital, population, languages, flag } = Object.assign(
    country[0]
  );

  return (
    <div key={name}>
      <h2>{name}</h2>
      capital: <span>{capital}</span>
      <br />
      population: {population}
      <br />
      <h3>Languages</h3>
      <br />
      <ul>
        {languages.map((e) => {
          return <li key={e.iso639_1}>{e.name}</li>;
        })}
      </ul>
      <br />
      <img src={flag} alt={name} style={{ height: "10rem" }} />
      <br />
      <h3>Weather in {capital}</h3>
      <Weather capital={capital} />
    </div>
  );
};
