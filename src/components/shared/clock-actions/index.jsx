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
    minWidth: '10rem',
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
        {/* Edit Button */}
        <Button
          variant='contained'
          sx={{ ...buttonStyle }}
          onClick={handleEdit}
        >
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
            sx={{ ...buttonStyle }}
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
