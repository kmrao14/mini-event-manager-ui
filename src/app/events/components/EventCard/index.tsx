'use client';

import './styles.css';
import { Event } from '../../events.types';
import Link from 'next/link';

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  return (
    <div className="event-card">
      <Link href={`/events/${event.id}`} className="event-card-link">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-attendee-count">{event.attendeeCount} Attendee(s)</p>
      </Link>
    </div>
  );
}
