import Chip from '@mui/material/Chip';
import useFillFormWithGuestData from '@features/login/guest-data-button/model/useFillFormWithGuestData';

const FillGuestDataButton = ({ isDisabled }: { isDisabled: boolean }) => {
  const handleFillGuestData = useFillFormWithGuestData();

  return (
    <Chip
      component="button"
      label="Fill form with Guest Data"
      color="success"
      variant="outlined"
      disabled={isDisabled}
      onClick={handleFillGuestData}
      sx={{ cursor: 'pointer' }}
    />
  );
};

export default FillGuestDataButton;
