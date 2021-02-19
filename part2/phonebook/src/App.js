import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    persons.find((persons) => persons.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
  };

  const handlerChange = (event) => {
    setNewName(event.target.value);
  };

  const listOfPersons = persons.map((person) => {
    return (
      <span key={person.name}>
        {person.name} <br />
      </span>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handlerChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {listOfPersons}
    </div>
  );
};

export default App;
