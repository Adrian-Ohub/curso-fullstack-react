export const Country = ({ country }) => {
  const probandoAssign = Object.assign(country[0]);
  return (
    <div key={probandoAssign.name}>
      <h2>{probandoAssign.name}</h2>
      capital: <span>{probandoAssign.capital}</span>
      <br />
      population: {probandoAssign.population}
      <br />
      <h3>Languages</h3>
      <br />
      <ul>
        {probandoAssign.languages.map((e) => {
          return <li key={e.iso639_1}>{e.name}</li>;
        })}
      </ul>
      <br />
      <img
        src={probandoAssign.flag}
        alt={probandoAssign.name}
        style={{ height: "10rem" }}
      />
    </div>
  );
};
