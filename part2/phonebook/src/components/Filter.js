export const Filter = ({ filter, handlerFilter }) => {
  return (
    <>
      <label>Filter shown with: </label>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handlerFilter}
      />
    </>
  );
};
