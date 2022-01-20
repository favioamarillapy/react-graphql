import { gql } from "@apollo/client";

export const GET_COURSES = gql`
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

export const GET_COURSE = gql`
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
