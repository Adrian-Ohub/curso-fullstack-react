import React, { useState, useEffect } from "react";
import { addPerson, deletePerson, getAll } from "./services/index";
import { Persons } from "./components/Persons.js";
import { PersonsForm } from "./components/PersonsForm.js";
import { Filter } from "./components/Filter.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setnewPerson] = useState({ name: "", number: "" });
  const [filterPersons, setFilterPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [switchDelPerson, setSwitchPerson] = useState(false);

  useEffect(() => {
    getAll().then((data) => {
      setPersons(data);
    });
  }, [switchDelPerson]);

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson.name,
      number: newPerson.number,
    };
    persons.find((persons) => persons.name === newPerson.name)
      ? alert(`${newPerson.name} is already added to phonebook`)
      : addPerson({ personObject }).then((data) => {
          setPersons(persons.concat(data));
        });

    setnewPerson({ name: "", number: "" });
  };

  const deleteSelectedPerson = (idPerson, namePerson) => {
    alert(`Are you sure to delete ${namePerson} ?`);
    if (window.confirm) {
      deletePerson({ idPerson }).then((data) => {
        data.status === 200
          ? //Para hacer un switch cogemos el valor anterior y lo cambiamos
            setSwitchPerson((w) => !w)
          : alert("404 error, try again");
      });
    }
    /* setSwitchPerson(false); */
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

  const list = showAll ? persons : filterPersons;

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
      <Persons list={list} deleteSelectedPerson={deleteSelectedPerson} />
    </div>
  );
};

export default App;
