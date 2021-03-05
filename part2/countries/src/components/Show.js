export const Show = ({ handlerShow, countrySelected }) => {
  console.log(handlerShow, countrySelected);
  return <button onClick={() => handlerShow(countrySelected)}>show</button>;
};
