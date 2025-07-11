'use client';

import './styles.css';
import { Attendee } from '../../events.types';
import { FC } from 'react';

type Props = {
  attendees: Attendee[];
  onRemove: (attendeeId: string) => void;
};

const AttendeeList: FC<Props> = ({ attendees, onRemove }) => {
  if (!attendees || attendees.length === 0) {
    return <p className="attendee-empty-text">No attendees yet.</p>;
  }

  return (
    <div className="attendee-list">
      {attendees.map(attendee => (
        <div key={attendee.id} className="attendee-card">
          <div>
            <p className="attendee-name">{attendee.name}</p>
            {attendee.email && <p className="attendee-email">{attendee.email}</p>}
          </div>
          <button
            onClick={() => onRemove(attendee.id)}
            className="attendee-remove"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AttendeeList;
