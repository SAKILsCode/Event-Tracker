import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

const ClockDisplay = ({ badgeText, title, date, timezone, offset }) => {
  if (date === null) return;

  let titleStyle;
  badgeText === 'BASE CLOCK'
    ? (titleStyle = { fontSize: 30, marginBottom: '1.1rem', color: '#78909c' })
    : (titleStyle = { fontSize: 30, marginBottom: '1.1rem' });

  return (
    <Box>
      {badgeText && (
        <Box sx={{ textAlign: 'left' }}>
          <Chip
            label={badgeText}
            size='small'
            sx={{
              color: '#f6f6f6',
              backgroundColor: '#78909c',
              fontSize: 10,
              height: 20,
            }}
          />
        </Box>
      )}

      <Typography variant='h5' sx={titleStyle} color='text.' gutterBottom>
        {title}
      </Typography>

      <Typography variant='h4' component='div' paddingBottom={1}>
        {format(date, `hh:mm:ss aaaaa'm' `)}
      </Typography>

      <Typography variant='body2' component='div'>
        {format(date, `eeee dd-MM-yyyy`)}
      </Typography>

      <Typography color='text.secondary'>
        {timezone}{' '}
        {(timezone === 'UTC' || timezone === 'GMT') &&
          (offset > 0 ? ` +${offset}` : offset)}
      </Typography>
    </Box>
  );
};

export default ClockDisplay;
