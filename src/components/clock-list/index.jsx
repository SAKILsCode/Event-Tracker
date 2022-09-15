import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ClockListItem from './clock-list-item';

const ClockList = ({ baseClock, clocks, updateClocks, deleteClock }) => {
  return (
    <Container maxWidth='lg' alignItems='center'>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
          marginTop: '3.5rem',
          marginBottom: '-0.5rem',
          color: '#78909c',
          textAlign: 'center',
        }}
      >
        Clock List
      </Typography>
      <hr style={{ width: '15rem' }} />

      <Grid container alignItems='stretch'>
        {clocks.length <= 0 ? (
          <Typography
            sx={{
              fontSize: 30,
              margin: '3.5rem',
              textAlign: 'center',
            }}
          >
            // Clock List is Empty
          </Typography>
        ) : (
          clocks.map((clock) => (
            <Grid key={clock.id} xs={12} md={6} lg={4} sx={{ margin: 'auto' }}>
              <ClockListItem
                key={clock.id}
                baseClock={baseClock}
                clock={clock}
                updateClocks={updateClocks}
                deleteClock={deleteClock}
                badgeText={`CLOCK ${clocks.indexOf(clock) + 1}`}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ClockList;
