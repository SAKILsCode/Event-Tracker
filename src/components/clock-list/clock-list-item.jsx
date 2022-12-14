import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { differenceInMinutes, formatDistance } from 'date-fns';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const ClockListItem = ({
  baseClock,
  clock,
  updateClocks,
  deleteClock,
  badgeText,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);
  const baseTimer = useTimer(baseClock);

  if (!date || !timer) return null;
  return (
    <Card
      sx={{
        maxWidth: 370,
        minWidth: 300,
        textAlign: 'center',
        margin: 4,
        background: '#e8e8e8',
      }}
    >
      <CardContent>
        <ClockDisplay
          badgeText={badgeText}
          title={clock.title}
          date={timer}
          timezone={clock.timezone}
          offset={clock.offset}
        />
      </CardContent>
      <Typography
        variant='h6'
        sx={{ marginBottom: '0.5rem', mx: '0.5rem' }}
        color='darkkhaki'
      >
        {formatDistance(baseTimer, timer)}
        {differenceInMinutes(baseTimer, timer) < 0 ? ' ahead' : ' behind'} of
        base clock
      </Typography>
      <CardActions>
        <ClockActions
          clock={clock}
          updateClock={updateClocks}
          deleteClock={deleteClock}
        />
      </CardActions>
    </Card>
  );
};

export default ClockListItem;
