export const DeleteBtn = ({ deleteSelectedPerson, id, name }) => {
  return <button onClick={() => deleteSelectedPerson(id, name)}>delete</button>;
};
