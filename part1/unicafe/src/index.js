import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ content }) => <h1>{content}</h1>;

const Button = ({ handlerClick, text }) => (
  <button onClick={handlerClick}>{text}</button>
);

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  const av = (props.good * 1 + props.neutral * 0 + props.bad * -1) / sum;
  const pos = (props.good / sum) * 100;
  if ((props.good || props.neutral || props.bad) === 0) {
    return <p>No feeback given</p>;
  } else {
    return (
      <>
        Good {props.good} <br />
        Neutral {props.neutral} <br />
        Bad {props.bad} <br />
        All {sum}
        <br />
        Average {isNaN(av) ? 0 : av.toFixed(5)}
        <br />
        Positive {isNaN(pos) ? 0 : pos.toFixed(5)} %
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header content="Give Feedback" />
      <Button handlerClick={() => setGood(good + 1)} text="Good" />
      <Button handlerClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handlerClick={() => setBad(bad + 1)} text="Bad" />
      <Header content="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
