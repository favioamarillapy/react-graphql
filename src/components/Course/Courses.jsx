import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import CourseDetail from "./CourseDetail";
import CourseForm from "./CourseForm";
import { GET_COURSE } from "../../graphql/courses/queries-courses";
import CourseCard from "./CourseCard";

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
    return <CourseDetail course={course} setCourse={setCourse} />;
  }

  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <div className="col-md-8">
            <div className="row">
              {courses &&
                courses.map((c) => (
                  <CourseCard key={c._id} course={c} showPerson={showPerson} />
                ))}
            </div>
          </div>

          <div className="col-md-4">
            <CourseForm />
          </div>
        </>
      )}
    </>
  );
}

export default Courses;
