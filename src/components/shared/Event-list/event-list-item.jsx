import EventActions from '../event-actions';
import EventDisplay from '../event-display';

const EventListItem = () => {
  return (
    <>
      <div>
        <h6>EventListItem</h6>
        <EventDisplay />
        <EventActions />
      </div>
    </>
  );
};
export default EventListItem;

//TODO: EventListItem - (EventActions + EventDisplay) Show each event in details
