import { useState } from 'react';
import { getOffsets, getTimezones } from '../../../utils/timezoneArrays';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// const clock = {
//   title: '',
//   timezone: '',
//   offset: 0
// }

// const event = {
//   title: '',
//   time: '',
//   timezone: '',
//   offset: 0
//   description: '',
// }

const AppForm = ({
  isBaseClock = false,
  isCreate = false,
  eventForm = false,

  clock = { title: '', timezone: 'UTC', offset: 0 },
  event = {
    title: '',
    time: '',
    timezone: 'UTC',
    offset: 0,
    description: '',
  },
  handleClock,
  closeModal,
}) => {
  const [formClock, setFormClock] = useState({ ...clock });
  const [formEvent, setFormEvent] = useState({ ...event });

  const itemStyle = {
    marginBottom: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#9e9e9e',
    '&:hover': { backgroundColor: '#78909c' },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    eventForm
      ? setFormEvent((prev) => ({
          ...prev,
          [name]: value,
        }))
      : setFormClock((prev) => ({
          ...prev,
          [name]: value,
        }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    eventForm ? handleForm(formEvent) : handleClock(formClock);
    // console.log(formClock);
    closeModal();
  };

  return (
    <Box sx={{ width: '70%', ml: '15%' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: 2 }}>
        {isCreate ? 'Create' : `Update ${isBaseClock && ' Base'}`}{' '}
        {eventForm ? ` Event` : ` Clock`}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box style={itemStyle}>
          <TextField
            required
            sx={{ width: '100%' }}
            label={'Clock Title'}
            size='small'
            variant='standard'
            name='title'
            value={formClock.title}
            onChange={handleChange}
          />
        </Box>

        {eventForm && (
          <Box style={{ ...itemStyle, marginTop: '0.5rem' }}>
            <span style={{ fontSize: 12, color: '#7e7e7e' }}>Time*</span>
            <br />
            <Input
              required
              sx={{ width: '48%' }}
              type='time'
              size='small'
              name='time'
              value={eventForm.time}
              onChange={handleChange}
            />
          </Box>
        )}

        <Box style={itemStyle}>
          <TextField
            select
            required
            sx={{ width: '48%' }}
            size='small'
            variant='standard'
            label='Timezone'
            name='timezone'
            value={formClock.timezone}
            onChange={handleChange}
          >
            {getTimezones().map((timezone) => (
              <MenuItem key={timezone} value={timezone}>
                {timezone}
              </MenuItem>
            ))}
          </TextField>

          {(formClock.timezone === 'GMT' || formClock.timezone === 'UTC') && (
            <TextField
              select
              required
              sx={{ width: '48%', ml: '4%' }}
              size='small'
              variant='standard'
              label='Offset'
              name='offset'
              value={formClock.offset}
              onChange={handleChange}
            >
              {getOffsets().map((offset) => (
                <MenuItem key={offset} value={offset}>
                  {offset > 0 ? `+${offset}` : offset}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Box>

        {eventForm && (
          <Box style={itemStyle}>
            <TextField
              required
              sx={{ width: '100%' }}
              label='Event Description'
              multiline
              size='small'
              variant='standard'
              name='description'
              value={eventForm.description}
              onChange={handleChange}
            />
          </Box>
        )}

        <Box style={itemStyle}>
          <Box
            sx={{
              width: '100%',
              '& button': { width: '80%', mx: '10%' },
            }}
          >
            <Button variant='contained' sx={buttonStyle} onClick={handleSubmit}>
              {isCreate ? 'CREATE' : 'UPDATE'}
              {eventForm ? ' Event' : ' CLOCK'}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AppForm;
