export const Show = ({ handlerShow, countrySelected }) => {
  return <button onClick={() => handlerShow(countrySelected)}>show</button>;
};
