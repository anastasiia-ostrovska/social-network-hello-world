import { CircularProgressProps } from '@mui/material';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularBlockProps {
  spinnerSize: CircularProgressProps['size'];
  spinnerColor?: CircularProgressProps['color'];
}

const PageLoader = ({
  spinnerSize,
  spinnerColor = 'primary',
}: CircularBlockProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
      role="status"
      aria-label="Loading page"
    >
      <CircularProgress size={spinnerSize} color={spinnerColor} />
    </Paper>
  );
};

export default PageLoader;
