import React, { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_COURSE = gql`
  query getCourse($id: ID!) {
    getCourse(id: $id) {
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

function Courses({ courses, loading }) {
  const [loadCourse, { data: courseData }] = useLazyQuery(GET_COURSE);

  const [course, setCourse] = useState(null);

  const showPerson = (id) => {
    loadCourse({
      variables: { id: id },
    });
  };

  useEffect(() => {
    if (courseData?.getCourse) {
      setCourse(courseData?.getCourse);
    }
  }, [courseData]);

  if (course) {
    return (
      <div>
        <h2>{course?.title}</h2>

        <div>
          <strong>Descriptions:</strong> <span>{course?.description}</span>
        </div>

        <div>
          <strong>Teacher:</strong> <span>{course?.teacher}</span>
        </div>

        <div>
          <strong>Topic:</strong> <span>{course?.topic}</span>
        </div>

        <div>
          <strong>Students:</strong> <span>{course?.students.length}</span>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setCourse(null);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div className="row">
          {courses &&
            courses.map((c) => (
              <div key={c._id} className="col-md-3 mt-3">
                <div className="border rounded p-2">
                  <p>{c.title}</p>

                  <a
                    className="view-more"
                    onClick={() => {
                      showPerson(c._id);
                    }}
                  >
                    View more....
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Courses;
