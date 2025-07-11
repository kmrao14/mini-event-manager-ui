'use client';

import './styles.css';
import { Formik, Form, Field, ErrorMessage as FormikError } from 'formik';
import { useRouter } from 'next/navigation';
import { useCreateEvent } from '../../mutations/createEvent';
import { eventValidationSchema } from './validation.schema';
import { CreateEventInput } from '../../events.types';
import Loader from '@/components/shared/Loader';
import ErrorMessage from '@/components/shared/ErrorMessage';

export default function EventForm() {
  const router = useRouter();
  const [createEvent, { loading, error }] = useCreateEvent();

  const handleSubmit = async (values: CreateEventInput) => {
    try {
      await createEvent({ variables: values });
      router.push('/events');
    } catch (err) {
      console.error('Create event failed', err);
    }
  };

  return (
    <Formik
      initialValues={{ title: '', date: '' }}
      validationSchema={eventValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="event-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <Field type="text" name="title" className="form-input" />
          <FormikError name="title" component="div" className="form-error" />
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <Field type="date" name="date" className="form-input" />
          <FormikError name="date" component="div" className="form-error" />
        </div>

        {error && <ErrorMessage message={error.message} />}

        <button
          type="submit"
          className="form-submit-btn"
          disabled={loading}
        >
          {loading ? <Loader /> : 'Create Event'}
        </button>
      </Form>
    </Formik>
  );
}
