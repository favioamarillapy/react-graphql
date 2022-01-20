import React from "react";

const CourseDetail = ({ course }) => {
  return (
    <div>
      <h2>{course.title}</h2>

      <div>
        <strong>Descriptions:</strong> <span>{course.description}</span>
      </div>

      <div>
        <strong>Teacher:</strong> <span>{course.teacher}</span>
      </div>

      <div>
        <strong>Topic:</strong> <span>{course.topic}</span>
      </div>

      <div>
        <strong>Students:</strong> <span>{course.students.length}</span>
      </div>
    </div>
  );
};

export default CourseDetail;
