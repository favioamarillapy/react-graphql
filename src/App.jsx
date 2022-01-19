import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import Courses from "./Courses";
import CourseForm from "./CourseForm";
import { GET_COURSES } from "./courses/graphql/queries-courses";

function App() {
  const { data, error, loading } = useQuery(GET_COURSES);

  if (error) return <span className="text-danger">{error}</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-title">Hello Vite + React + GraphQL!</p>

        <Courses courses={data?.getCourses} loading={loading} />

        <CourseForm />
      </header>
    </div>
  );
}

export default App;
