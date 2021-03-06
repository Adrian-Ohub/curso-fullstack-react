import { DeleteBtn } from "./DeleteBtn";
export const Persons = ({ list, deleteSelectedPerson }) => {
  return list.map((person) => {
    return (
      <span key={person.id}>
        {person.name} {person.number}{" "}
        <DeleteBtn
          deleteSelectedPerson={deleteSelectedPerson}
          id={person.id}
          name={person.name}
        />
        <br />
      </span>
    );
  });
};
