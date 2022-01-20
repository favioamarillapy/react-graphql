import React from "react";

const CourseCard = ({ course, showPerson }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="border rounded p-2">
        <p>{course.title}</p>

        <a
          className="view-more"
          onClick={() => {
            showPerson(course._id);
          }}
        >
          View more....
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
