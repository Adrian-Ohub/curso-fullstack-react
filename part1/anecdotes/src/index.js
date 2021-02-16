import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handlerClick, text }) => (
  <button onClick={handlerClick}>{text}</button>
);
//Initial State
const points = [0, 4, 6, 3, 0, 0];
const maxVoted = Math.max(...points);
const anecdoteMaxVoted = [...points].indexOf(maxVoted);

const App = (props) => {
  // if you want a random anecdote in onload
  //const [selected, setSelected] = useState(Math.floor(Math.random() * (6 - 0) + 0));
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...points]);

  const handlerVote = () => {
    votes[selected] += 1;
    return setVotes([...votes]);
  };
  return (
    <>
      <div>
        <h2>Anecdote of the Day</h2>
        {props.anecdotes[selected]} <br /> <br />
        Has {votes[selected]} votes! <br />
        <Button handlerClick={() => handlerVote([selected])} text="vote!" />
        <Button
          handlerClick={() =>
            setSelected(Math.floor(Math.random() * (6 - 0) + 0))
          }
          text="next anecdote"
        />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {props.anecdotes[anecdoteMaxVoted]} <br />
        Has {maxVoted} votes! <br />
      </div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
