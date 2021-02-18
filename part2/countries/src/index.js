import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  const arr = course.parts;
  const total = arr.reduce((acc, obj) => {
    return acc + obj.exercises;
  }, 0);
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <p>
        <b>Total of {total} exercises</b>
      </p>
    </>
  );
};
const Header = ({ title }) => <h1>{title}</h1>;
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((e) => (
        <Part key={e.id} parts={e} />
      ))}
    </div>
  );
};
const Part = ({ parts }) => {
  return (
    <>
      <p key={parts.id}>
        {parts.name} {parts.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
