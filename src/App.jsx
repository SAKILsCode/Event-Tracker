import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import shortid from 'shortid';

import BaseClock from './components/base-clock';
import ClockList from './components/clock-list';

const INITIAL_BASE_CLOCK = {
  title: 'Base Clock',
  timezone: '',
  offset: 0,
  date: null,
};

const App = () => {
  const [baseClock, setBaseClock] = useState({ ...INITIAL_BASE_CLOCK });
  const [clocks, setClocks] = useState([]);

  const updateBaseClock = (data) => {
    setBaseClock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  const createClock = (clock) => {
    clock.id = shortid.generate();
    setClocks([...clocks, clock]);
  };
  const updateClocks = (updatedClock) => {
    console.log(updatedClock);
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };
  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <h1
          style={{
            color: '#78909c',
            textAlign: 'center',
            fontSize: 40,
          }}
        >
          Event Tracker
        </h1>
        <BaseClock
          baseClock={baseClock}
          updateBaseClock={updateBaseClock}
          createClock={createClock}
        />
        <ClockList
          baseClock={baseClock.date}
          clocks={clocks}
          updateClocks={updateClocks}
          deleteClock={deleteClock}
        />
      </Container>
    </>
  );
};

export default App;
//TODO: ClockAction - implement Create event and Show event button and func
//TODO: EventList - Show all event list instead of clock list
//TODO: EventList - Show each event list inside clock card
//TODO: EventListItem - (EventActions + EventDisplay) Show each event in details
//TODO: EventActions - contains edit ans delete button and their functionalities
//TODO: EventDisplay - display information (title, time, timezone, description)
