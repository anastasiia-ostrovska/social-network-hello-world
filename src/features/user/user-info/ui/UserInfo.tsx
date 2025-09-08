import Typography from '@mui/material/Typography';
import { SkeletonText } from '@shared/ui';
import { UserInfoProps } from '../model/types';

interface Props extends UserInfoProps {
  noWrap?: boolean;
}

const UserInfo = ({
  isLoading,
  name,
  jobTitle,
  country,
  noWrap = true,
}: Props) => {
  return (
    <>
      <Typography noWrap={noWrap} gutterBottom variant="h6" component="h3">
        <SkeletonText isLoading={isLoading} element={name} />
      </Typography>
      <Typography
        noWrap={noWrap}
        variant="body1"
        sx={{ color: 'text.secondary' }}
      >
        <SkeletonText isLoading={isLoading} element={jobTitle} />
      </Typography>
      <Typography
        noWrap={noWrap}
        variant="body1"
        sx={{ color: 'text.secondary' }}
      >
        <SkeletonText isLoading={isLoading} element={country} />
      </Typography>
    </>
  );
};

export default UserInfo;
