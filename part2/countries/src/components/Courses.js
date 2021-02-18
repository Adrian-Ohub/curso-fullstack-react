const Courses = ({ courses }) => {
  const Header = ({ title }) => <h2>{title}</h2>;
  const Content = ({ parts }) => {
    const total = parts.reduce((acc, obj) => {
      return acc + obj.exercises;
    }, 0);
    return (
      <div>
        {parts.map((e) => (
          <Part key={e.id} parts={e} />
        ))}
        <p>
          <b>Total of {total} exercises</b>
        </p>
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
  const crss = courses.map((course) => {
    return (
      <div key={course.id}>
        <Header title={course.name} />
        <Content parts={course.parts} />
      </div>
    );
  });
  return (
    <div>
      <h1>Web development Curriculum</h1>
      {crss}
    </div>
  );
};

export default Courses;
