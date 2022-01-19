import logo from "./logo.svg";
import "./App.css";
import Courses from "./Courses";
import { gql, useQuery } from "@apollo/client";

const GET_COURSES = gql`
  query {
    getCourses {
      _id
      title
      teacher
      description
      level
      topic
      students {
        _id
        name
        email
        avatar
      }
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(GET_COURSES);

  if (error) return <span className="text-danger">{error}</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-title">Hello Vite + React + GraphQL!</p>

        <Courses courses={data?.getCourses} loading={loading} />
      </header>
    </div>
  );
}

export default App;
