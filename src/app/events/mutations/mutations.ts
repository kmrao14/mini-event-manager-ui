import { gql, useMutation  } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent($title: String!, $date: String!) {
    createEvent(title: $title, date: $date) {
      id
      title
      date
    }
  }
`;

export const ADD_ATTENDEE = gql`
  mutation AddAttendeeToEvent($eventId: ID!, $name: String!, $email: String) {
    addAttendeeToEvent(eventId: $eventId, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const REMOVE_ATTENDEE = gql`
  mutation RemoveAttendeeFromEvent($eventId: ID!, $attendeeId: ID!) {
    removeAttendeeFromEvent(eventId: $eventId, attendeeId: $attendeeId)
  }
`;

export const useAddAttendee = () => useMutation(ADD_ATTENDEE);
export const useRemoveAttendee = () => useMutation(REMOVE_ATTENDEE);
