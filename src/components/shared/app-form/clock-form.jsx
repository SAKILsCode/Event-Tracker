import AppForm from '.';

const ClockForm = ({
  isBaseClock,
  isCreate,

  clock,
  handleClock,
  closeModal,
}) => (
  <AppForm
    isBaseClock={isBaseClock}
    isCreate={isCreate}
    clock={clock}
    handleClock={handleClock}
    closeModal={closeModal}
  />
);

export default ClockForm;
