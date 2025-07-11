export type Event = {
  id: string;
  title: string;
  date: string;
  attendeeCount: number;
  attendees?: Attendee[];
};

export type CreateEventInput = {
  title: string;
  date: string;
};

export type Attendee = {
  id: string;
  name: string;
  email?: string;
};

export type EventDetails = {
  id: string;
  title: string;
  date: string;
  attendees: Attendee[];
};