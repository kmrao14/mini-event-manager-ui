import EventForm from '../components/EventForm';
import PageHeader from '@/components/shared/PageHeader';

export default function CreateEventPage() {
  return (
    <main className="page-wrap">
      <PageHeader />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
        <EventForm />
      </div>
    </main>
  );
}
