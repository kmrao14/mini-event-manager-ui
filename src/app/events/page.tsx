'use client';

import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '@/app/events/mutations/queries';
import EventList from './components/EventsList';
import { Event } from './events.types';
import PageHeader from '@/components/shared/PageHeader';
import Loader from '@/components/shared/Loader';
import ErrorMessage from '@/components/shared/ErrorMessage';
import Link from 'next/link';

export default function EventsPage() {
  const { data, loading, error } = useQuery(GET_EVENTS, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <main className="page-wrap">
      <PageHeader />
      <EventList events={data?.events || []} />
    </main>
  );
}
