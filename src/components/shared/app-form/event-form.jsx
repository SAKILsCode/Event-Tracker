import AppForm from '.';

const EventForm = ({ isCreate, eventForm, event, closeModal }) => (
  <AppForm
    isCreate={isCreate}
    eventForm={eventForm}
    event={event}
    closeModal={closeModal}
  />
);

export default EventForm;
