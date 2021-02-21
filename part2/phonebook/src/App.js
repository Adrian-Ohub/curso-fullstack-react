import React, { useState } from "react";
import { Persons } from "./components/Persons.js";
import { PersonsForm } from "./components/PersonsForm.js";
import { Filter } from "./components/Filter.js";

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

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filter={filter} handlerFilter={handlerFilter} />
      <h2>Add a New</h2>
      <PersonsForm
        addNewPerson={addNewPerson}
        newPerson={newPerson}
        handlerChange={handlerChange}
      />
      <h2>Numbers</h2>
      <Persons
        showAll={showAll}
        persons={persons}
        filterPersons={filterPersons}
      />
    </div>
  );
};

export default App;
