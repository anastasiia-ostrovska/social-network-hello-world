import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '@shared/consts';
import NotFoundIcon from '@assets/not-found-icon.svg';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NotFoundPageLayout from './ui/NotFoundPageLayout';
import { useButtonSize } from './lib/useButtonSize';
import { NOT_FOUND_PAGE_HELPER_TEXT } from './consts/not-found-helper-text';

const NotFoundPage = () => {
  const buttonSize = useButtonSize();

  return (
    <NotFoundPageLayout
      icon={<NotFoundIcon />}
      helperText={NOT_FOUND_PAGE_HELPER_TEXT}
      goHomeButton={
        <Button
          component={RouterLink}
          to={ROUTES.HOME}
          variant="text"
          size={buttonSize}
          startIcon={<KeyboardBackspaceIcon />}
          sx={{ width: 'fit-content' }}
        >
          Back to our site
        </Button>
      }
    />
  );
};

export default NotFoundPage;
