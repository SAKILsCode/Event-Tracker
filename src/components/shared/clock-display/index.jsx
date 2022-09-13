import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const ClockDisplay = ({ badgeType, title, date, timezone, offset }) => {
  return (
    <>
      {badgeType && (
        <Box sx={{ textAlign: 'left' }}>
          <Chip label={badgeType} size='small' />
        </Box>
      )}
      <Typography variant='h4' sx={{}} color='text.secondary' gutterBottom>
        {title}
      </Typography>
      <Typography variant='h4' component='div'>
        {date}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        {timezone} {offset}
      </Typography>
    </>
  );
};

export default ClockDisplay;
