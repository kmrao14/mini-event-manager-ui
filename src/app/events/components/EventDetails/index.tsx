'use client';

import './styles.css';

import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_EVENT_BY_ID } from '@/app/events/mutations/queries';
import { useRemoveAttendee } from '@/app/events/mutations/mutations';
import Loader from '@/components/shared/Loader';
import ErrorMessage from '@/components/shared/ErrorMessage';
import AttendeeForm from '../AttendeeForm';
import AttendeeList from '../AttendeeList';
import { Event } from '../../events.types';

export default function EventDetails() {
  const params = useParams();
  const eventId = params?.id as string;

  const { data, loading, error, refetch } = useQuery<{ event: Event }>(
    GET_EVENT_BY_ID,
    {
      variables: { id: eventId },
      skip: !eventId,
    }
  );

  const [removeAttendee] = useRemoveAttendee();

  const handleRemoveAttendee = async (attendeeId: string) => {
    await removeAttendee({ variables: { eventId, attendeeId } });
    refetch();
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.event) {
    return <p className="event-empty-message">Event not found.</p>;
  }

  const { title, date, attendees } = data.event;

  return (
    <main className="event-details-container">
      <header className="event-header">
        <h1 className="event-title">{title}</h1>
        <p className="event-date">DATE: {date}</p>
      </header>

      <section className="event-section">
        <h2 className="event-subsection-heading">Attendees</h2>
        <AttendeeList attendees={attendees ?? []} onRemove={handleRemoveAttendee} />
      </section>

      <section>
        <h3 className="event-subsection-heading">Add Attendee</h3>
        <AttendeeForm eventId={eventId} onSuccess={refetch} />
      </section>
    </main>
  );
}
