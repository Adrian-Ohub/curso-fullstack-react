export const Persons = ({ showAll, persons, filterPersons }) => {
  const list = showAll ? persons : filterPersons;
  const listOfPersons = list.map((person) => {
    return (
      <span key={person.name}>
        {person.name} {person.number}
        <br />
      </span>
    );
  });
  return listOfPersons;
};
