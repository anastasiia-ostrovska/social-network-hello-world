import { PaperProps } from '@mui/material';
import { ReactNode } from 'react';
import { Styles } from '@shared/model';
import Paper from '@mui/material/Paper';

interface SectionWrapperProps extends PaperProps {
  children: ReactNode;
  sx?: Styles;
}

const SectionWrapper = ({
  children,
  sx = {},
  ...props
}: SectionWrapperProps) => {
  return (
    <Paper
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        p: { xs: 1, sm: 2, md: 3 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default SectionWrapper;
