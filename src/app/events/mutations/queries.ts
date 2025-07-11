import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      date
      attendeeCount
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query GetEvent($id: ID!) {
    event(id: $id) {
      id
      title
      date
      attendees {
        id
        name
        email
      }
    }
  }
`;

