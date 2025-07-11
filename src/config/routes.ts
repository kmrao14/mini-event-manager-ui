export const ROUTES = {
  HOME: '/',
  EVENTS: '/events',
  NEW_EVENT: '/events/new',
  EVENT_DETAILS: (id: string) => `/events/${id}`,
};