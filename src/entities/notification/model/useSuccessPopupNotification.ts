import { useAppDispatch } from '@shared/model';
import { createSuccessNotificationElement } from '../lib/createNotificationElement';
import { addNotification } from './notificationSlice';

interface SuccessPopupNotificationResult {
  showSuccessNotification: () => void;
}

/**
 * A custom hook that provides functionality to display a success popup notification.
 *
 * @param {Object} config - The configuration for the success popup notification.
 * @param {string} config.message - The message to be displayed in the success popup notification.
 * @returns {Object} An object containing a function that triggers the display of the success popup notification.
 */

export const useSuccessPopupNotification = ({
  message,
}: {
  message: string;
}): SuccessPopupNotificationResult => {
  const dispatch = useAppDispatch();

  const showSuccessNotification = () => {
    const successNotification = createSuccessNotificationElement({ message });
    dispatch(addNotification(successNotification));
  };

  return { showSuccessNotification };
};
