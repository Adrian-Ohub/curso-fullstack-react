import React from "react";
import ReactDOM from "react-dom";

const Content = (props) => {
  let tot = 0;
  props.course.parts.forEach((part) => (tot += part.exercises));
  return (
    <>
      <h1>{props.course.name}</h1>
      {props.course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>number of exercises {tot}</p>
    </>
  );
};

const App = () => {
  // const-definitions
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <div>
        <Content course={course} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
