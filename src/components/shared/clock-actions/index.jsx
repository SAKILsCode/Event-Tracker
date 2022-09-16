import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ClockForm from '../app-form/clock-form';
import CustomModal from '../custom-modal';

const ClockActions = ({
  baseClock = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
  badgeContent = 0,
}) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [editState, setEditState] = useState(false);
  const [createState, setCreateState] = useState(false);

  const handleClose = () => {
    setModalStatus(false);
    setCreateState(false);
    setEditState(false);
  };
  const handleOpen = () => setModalStatus(true);

  const buttonStyle = {
    backgroundColor: '#9e9e9e',
    '&:hover': { backgroundColor: '#78909c' },
    minWidth: '5rem',
  };

  const handleEdit = () => {
    setEditState(!modalStatus);
    handleOpen();
  };

  const handleCreate = () => {
    setCreateState(!modalStatus);
    handleOpen();
  };

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <Box sx={{ width: '100%', '& button': { m: 1 } }}>
      <div>
        {/* TODO: Implement show event and create event button and functionality */}
        {!baseClock && (
          <>
            <Box sx={{ mb: '-0.5rem' }}>
              <Button
                variant='contained'
                sx={{
                  ...buttonStyle,
                  backgroundColor: '#78909c',
                  minWidth: '11.5rem',
                }}
                onClick={() => console.log('Create Event Clicked')}
              >
                CREATE EVENT
              </Button>
            </Box>
            <Box>
              {/* A dummy component to correct button alignment */}
              <Badge sx={{ ml: -1 }} />
              <Button
                disabled={badgeContent === 0 && true}
                variant='contained'
                sx={{
                  ...buttonStyle,
                  backgroundColor: '#78909c',
                  minWidth: '11.5rem',
                  mr: '10rem',
                }}
                onClick={() => console.log('Show Event Clicked')}
              >
                SHOW EVENTS
              </Button>
              <Badge
                badgeContent={badgeContent ? badgeContent : '0'}
                color='primary'
                sx={{ mb: 4, ml: -1 }}
              />
            </Box>
          </>
        )}
      </div>

      <div>
        {/* Edit Button */}
        <Button variant='contained' sx={buttonStyle} onClick={handleEdit}>
          {baseClock ? 'EDIT BASE CLOCK' : 'EDIT'}
        </Button>

        {/* Conditionally Create or Delete Clock */}
        {baseClock ? (
          <Button variant='contained' sx={buttonStyle} onClick={handleCreate}>
            CREATE NEW CLOCK
          </Button>
        ) : (
          <Button
            variant='contained'
            sx={buttonStyle}
            onClick={() => deleteClock(clock.id)}
          >
            DELETE
          </Button>
        )}
      </div>

      <CustomModal open={modalStatus} handleClose={handleClose}>
        {editState && (
          <ClockForm
            isBaseClock={baseClock}
            clock={clock}
            handleClock={updateClock}
            closeModal={handleClose}
          />
        )}

        {createState && (
          <ClockForm
            isCreate
            isBaseClock={baseClock}
            handleClock={handleClock}
            closeModal={handleClose}
          />
        )}
      </CustomModal>
    </Box>
  );
};
export default ClockActions;
