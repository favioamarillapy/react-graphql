import { gql } from "@apollo/client";

export const ADD_COURSE = gql`
  mutation ($input: CourseInput!) {
    createCourse(input: $input) {
      _id
      title
      description
      topic
      teacher
      level
      students {
        _id
        name
        avatar
        email
      }
    }
  }
`;
