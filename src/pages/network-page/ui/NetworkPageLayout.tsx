import { ReactElement } from 'react';
import { SectionWrapper } from '@shared/ui';
import Grid2 from '@mui/material/Grid2';

interface NetworkPageLayoutProps {
  pagination: ReactElement;
  userCards: ReactElement[];
  showPagination: boolean;
}

const NetworkPageLayout = ({
  pagination,
  userCards,
  showPagination,
}: NetworkPageLayoutProps) => {
  return (
    <>
      {showPagination && (
        <SectionWrapper sx={{ alignItems: 'center' }}>
          {pagination}
        </SectionWrapper>
      )}
      <SectionWrapper>
        <Grid2
          container
          component="ul"
          rowSpacing={2}
          columnSpacing={{ xs: 1, md: 2 }}
          sx={{ width: '100%', m: 0, p: 0 }}
        >
          {userCards}
        </Grid2>
      </SectionWrapper>
    </>
  );
};

export default NetworkPageLayout;
