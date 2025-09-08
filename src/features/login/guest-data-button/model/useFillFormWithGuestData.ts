import { useFormContext } from 'react-hook-form';
import { LoginField } from '@entities/session';
import { GUEST_CREDENTIALS } from '@features/login/guest-data-button/consts/guest-credentials';

const useFillFormWithGuestData = () => {
  const { reset } = useFormContext();

  const handleFillGuestData = () => {
    reset(
      {
        [LoginField.Email]: GUEST_CREDENTIALS.email,
        [LoginField.Password]: GUEST_CREDENTIALS.password,
      },
      {
        keepDefaultValues: true,
        keepTouched: true,
      }
    );
  };

  return handleFillGuestData;
};

export default useFillFormWithGuestData;
