import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  /*   const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true); */

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {notes.map((e) => (
          <span key={e.id}>
            {e.name} <br />
            {e.number} <br />
            <hr />
          </span>
        ))}
      </div>
    </>
  );
};
export default App;
