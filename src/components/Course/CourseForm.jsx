import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_COURSE } from "../../graphql/courses/mutations";
import { GET_COURSES } from "../../graphql/courses/queries-courses";
import { useForm } from "../../hooks/useForm";

const COURSE_INPUT = {
  title: "",
  description: "",
  topic: "",
  teacher: "",
  level: "",
};

const CourseForm = () => {
  const [inputs, handleInputChange, formReset] = useForm(COURSE_INPUT);
  const { title, description, topic, teacher, level } = inputs;

  const [addCourse] = useMutation(ADD_COURSE, {
    refetchQueries: [{ query: GET_COURSES }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addCourse({
      variables: { input: { ...inputs } },
    });

    formReset();
  };

  return (
    <div className="p-3">
      <h4>New Course</h4>
      <hr />
      <form className="col-md-12" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Topic</label>
          <input
            type="text"
            name="topic"
            className="form-control"
            placeholder="Topic"
            value={topic}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Teacher</label>
          <input
            type="text"
            name="teacher"
            className="form-control"
            placeholder="Teacher"
            value={teacher}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Level</label>
          <select
            name="level"
            className="form-control"
            value={level}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
