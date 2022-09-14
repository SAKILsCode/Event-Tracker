import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const BaseClock = ({ baseClock, updateBaseClock, createClock }) => {
  const { date, offset, timezone } = useClock(
    baseClock.timezone,
    baseClock.offset
  );

  useEffect(() => {
    updateBaseClock({ date, timezone, offset });
  }, [date]);

  return (
    <Box>
      <Card sx={{ minWidth: 275, textAlign: 'center' }}>
        <CardContent>
          <ClockDisplay
            badgeText='BASE CLOCK'
            title={baseClock.title}
            date={date}
            timezone={timezone}
            offset={offset}
          />
        </CardContent>
        <CardActions>
          <ClockActions
            baseClock
            clock={baseClock}
            updateClock={updateBaseClock}
            createClock={createClock}
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default BaseClock;
