import Grid2 from '@mui/material/Grid2';
import { Pagination } from '@features/pagination';
import { UserCardVertical } from '@widgets/user-card';
import { useUsersList } from './model/useUsersList';
import NetworkPageLayout from './ui/NetworkPageLayout';

const NetworkPage = () => {
  const {
    isLoading,
    isError,
    users,
    paginationSize,
    pagesCount,
    currentPage,
    handlePageChange,
  } = useUsersList();
  const showPagination = !isLoading && pagesCount > 0 && !isError;

  return (
    <NetworkPageLayout
      showPagination={showPagination}
      pagination={
        <Pagination
          isLoading={isLoading}
          size={paginationSize}
          pagesCount={pagesCount}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      }
      userCards={users.map((user) => {
        const { id, name, photos, job, country } = user;

        return (
          <Grid2 component="li" size={{ xs: 6, md: 4, lg: 3 }} key={id}>
            <UserCardVertical
              isLoading={isLoading || isError}
              userId={id}
              name={name}
              jobTitle={job}
              country={country}
              avatarSrc={photos?.avatar}
              bgImageSrc={photos?.background}
              avatarSize={100}
              bgImageHeight={80}
            />
          </Grid2>
        );
      })}
    />
  );
};

export default NetworkPage;
