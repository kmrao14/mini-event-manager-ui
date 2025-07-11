export type Attendee = {
  id: string;
  name: string;
  email?: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  attendees: Attendee[];
};

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Summit',
    date: '2025-07-20',
    attendees: [
      { id: 'a1', name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 'a2', name: 'Bob Smith' }
    ]
  },
  {
    id: '2',
    title: 'GraphQL Conf',
    date: '2025-08-15',
    attendees: []
  }
];
