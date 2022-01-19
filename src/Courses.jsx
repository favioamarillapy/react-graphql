import React from "react";
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

function Courses() {
  const { data, error, loading } = useQuery(GET_COURSES);

  if (error) return <span className="text-danger">{error}</span>;

  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div className="row">
          {data &&
            data.getCourses.map((c) => (
              <div key={c.id} className="col-md-3 mt-3">
                <div className="border rounded p-2">
                  <strong>{c.title}</strong>
                  <p>{c.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Courses;
