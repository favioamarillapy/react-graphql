import React from "react";

const CourseDetail = ({ course, setCourse }) => {
  return (
    <div className="border rounded p-4 col-md-6">
      <h2>{course.title}</h2>

      <div>
        <strong>Descriptions: </strong> <span>{course.description}</span>
      </div>

      <div>
        <strong>Teacher: </strong> <span>{course.teacher}</span>
      </div>

      <div>
        <strong>Topic: </strong> <span>{course.topic}</span>
      </div>

      <div>
        <strong>Students: </strong> <span>{course.students.length}</span>
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
};

export default CourseDetail;
