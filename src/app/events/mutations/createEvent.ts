import { gql, useMutation } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent($title: String!, $date: String!) {
    createEvent(title: $title, date: $date) {
      id
      title
      date
      attendeeCount
    }
  }
`;

export function useCreateEvent() {
  return useMutation(CREATE_EVENT, {
    update: (cache, { data: { createEvent } }) => {
      cache.modify({
        fields: {
          events(existing = []) {
            const newEventRef = cache.writeFragment({
              data: createEvent,
              fragment: gql`
                fragment NewEvent on Event {
                  id
                  title
                  date
                  attendeeCount
                }
              `,
            });
            return [...existing, newEventRef];
          },
        },
      });
    },
  });
}
