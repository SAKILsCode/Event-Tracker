import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CustomModal from '../custom-modal';

const ClockAction = ({ baseClock = false }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const handleClose = () => setModalStatus(false);
  const handleOpen = () => setModalStatus(true);

  const buttonStyle = {
    backgroundColor: '#9e9e9e',
    '&:hover': { backgroundColor: '#78909c' },
  };

  return (
    <>
      <Box sx={{ width: '100%', '& button': { m: 1 } }}>
        <div>
          <Button variant='contained' sx={buttonStyle} onClick={handleOpen}>
            {baseClock ? 'EDIT BASE CLOCK' : 'EDIT CLOCK'}
          </Button>
          {baseClock ? (
            <Button variant='contained' sx={buttonStyle} onClick={handleOpen}>
              CREATE NEW CLOCK
            </Button>
          ) : (
            <Button variant='contained' sx={buttonStyle} onClick={handleOpen}>
              DELETE
            </Button>
          )}
        </div>
      </Box>

      <CustomModal open={modalStatus} handleClose={handleClose}>
        <Box>
          <Typography>helooooooooo</Typography>
        </Box>
      </CustomModal>
    </>
  );
};
export default ClockAction;
