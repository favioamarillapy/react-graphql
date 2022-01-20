import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import Courses from "./components/Course/Courses";
import { GET_COURSES } from "./graphql/courses/queries-courses";

function App() {
  const { data, error, loading } = useQuery(GET_COURSES);

  if (error) return <span className="text-danger">{error}</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-title">Hello Vite + React + GraphQL!</p>

        <div className="row">
          <Courses courses={data?.getCourses} loading={loading} />
        </div>
      </header>
    </div>
  );
}

export default App;
