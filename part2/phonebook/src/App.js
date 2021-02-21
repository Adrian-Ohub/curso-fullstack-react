import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newPerson, setnewPerson] = useState({ name: "", number: "" });
  const [filterPersons, setFilterPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
    };
    persons.find((persons) => persons.name === newPerson.name)
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons(persons.concat(personObject));

    setnewPerson({ name: "", number: "" });
  };

  const handlerChange = (event) => {
    const name = event.target.name;
    const newInput = event.target.value;
    setnewPerson({ ...newPerson, [name]: newInput });
  };

  const handlerFilter = (event) => {
    setFilter(event.target.value);
    if (event.target.value) {
      setFilterPersons(
        persons.filter((person) =>
          person.name.toLowerCase().match(event.target.value.toLowerCase())
        )
      );
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  const showPersons = showAll ? persons : filterPersons;

  const showListOfPersons = showPersons.map((person) => {
    return (
      <span key={person.name}>
        {person.name} {person.number}
        <br />
      </span>
    );
  });

  return (
    <div>
      <h2>PhoneBook</h2>
      <label>Filter shown with: </label>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handlerFilter}
      />
      <h2>Add a New</h2>
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
      <h2>Numbers</h2>
      {showListOfPersons}
    </div>
  );
};

export default App;
