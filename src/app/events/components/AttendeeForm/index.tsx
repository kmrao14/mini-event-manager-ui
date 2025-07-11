'use client';

import './styles.css';
import { Formik, Form, Field } from 'formik';
import { useAddAttendee } from '@/app/events/mutations/mutations';
import { attendeeSchema } from './validation.schema';
import { AttendeeFormProps } from './types';

export default function AttendeeForm({ eventId, onSuccess }: AttendeeFormProps) {
  const [addAttendee] = useAddAttendee();

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={attendeeSchema}
      onSubmit={async (values, { resetForm }) => {
        await addAttendee({ variables: { eventId, ...values } });
        resetForm();
        onSuccess();
      }}
    >
      {({ errors, touched }) => (
        <Form className="attendee-form">
          <div className="attendee-form-group">
            <label className="attendee-label">Name</label>
            <Field type="text" name="name" className="attendee-input" />
            {touched.name && errors.name && (
              <div className="attendee-error">{errors.name}</div>
            )}
          </div>

          <div className="attendee-form-group">
            <label className="attendee-label">Email (optional)</label>
            <Field type="email" name="email" className="attendee-input" />
            {touched.email && errors.email && (
              <div className="attendee-error">{errors.email}</div>
            )}
          </div>

          <button type="submit" className="attendee-submit">
            Add Attendee
          </button>
        </Form>
      )}
    </Formik>
  );
}
