import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const GET_COURSES = gql`
  query getCourses {
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
        <p>Hello Vite + React + GraphQL!</p>

        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            {data && data.getCourses.map((course) => course.title).join(", ")}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
