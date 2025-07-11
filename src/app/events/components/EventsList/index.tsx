'use client';

import './styles.css';
import EventCard from '../EventCard';
import { EventListProps } from './types';

export default function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return <p className="event-list-empty">No events found.</p>;
  }

  return (
    <div className="event-list-wrapper">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
