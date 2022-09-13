import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({ open, handleClose, children }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default CustomModal;

// const [modalStatus, setModalStatus] = useState(false);
// const handleClose = () => setModalStatus(false);
// const handleOpen = () => setModalStatus(true);

// <Button onClick={handleOpen}>Open modal</Button>
{
  /* <CustomModal open={modalStatus} handleClose={handleClose}>
  <Box>
    <Typography>helooooooooo</Typography>
  </Box>
</CustomModal> */
}
