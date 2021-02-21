export const Persons = ({ list }) =>
  list.map((person) => {
    return (
      <span key={person.name}>
        {person.name} {person.number}
        <br />
      </span>
    );
  });
