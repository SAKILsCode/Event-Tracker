import { Box, Typography } from '@mui/material';
import ClockListItem from './clock-list-item';

const ClockList = ({ baseClock, clocks, updateClocks, deleteClock }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
          marginTop: '2rem',
          marginBottom: '-0.5rem',
          color: '#78909c',
          textAlign: 'center',
        }}
      >
        Clock List
      </Typography>
      <hr style={{ width: '30rem' }} />
      <Box>
        {clocks.length === 0 ? (
          <Typography
            sx={{
              fontSize: 30,
              margin: '5rem',
              textAlign: 'center',
            }}
          >
            // Clock List is Empty
          </Typography>
        ) : (
          <div>
            {clocks.map((clock) => {
              console.log(clock);
              return (
                <ClockListItem
                  key={clock.id}
                  baseClock={baseClock}
                  clock={clock}
                  updateClocks={updateClocks}
                  deleteClock={deleteClock}
                />
              );
            })}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ClockList;
