export const PersonsForm = ({ addNewPerson, newPerson, handlerChange }) => {
  return (
    <>
      <form onSubmit={addNewPerson}>
        <div>
          <label>Name:</label>
          <input value={newPerson.name} name="name" onChange={handlerChange} />
          <br />
          <label>Number: </label>
          <input
            value={newPerson.number}
            name="number"
            onChange={handlerChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};
