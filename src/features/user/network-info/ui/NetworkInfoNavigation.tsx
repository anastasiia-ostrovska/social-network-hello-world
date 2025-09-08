import { ReactNode } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Styles } from '@shared/model';
import { ROUTES } from '@shared/consts';
import { Link } from 'react-router-dom';
import NetworkInfo from './NetworkInfo';

interface NetworkNavButtonProps {
  userId: string;
  isDisabled: boolean;
  children: ReactNode;
  sx?: Styles;
}

const NetworkNavButton = ({
  userId,
  isDisabled,
  children,
  sx = {},
}: NetworkNavButtonProps) => {
  const button = (
    <IconButton disabled={isDisabled} sx={{ borderRadius: 1, ...sx }}>
      {children}
    </IconButton>
  );

  return isDisabled ? (
    button
  ) : (
    <Link
      to={`${ROUTES.PROFILE_NETWORK}/:${userId}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {button}
    </Link>
  );
};

interface NetworkInfoNavigationProps extends StackProps {
  userId: string;
  followingCount: number;
  followersCount: number;
  isLoading: boolean;
}

const networkInfoStyles = {
  spacing: { xs: 0.5, sm: 0 } as StackProps['spacing'],
  direction: { xs: 'row', sm: 'column' } as StackProps['direction'],
};

const NetworkInfoNavigation = ({
  userId,
  followingCount,
  followersCount,
  isLoading,
  ...wrapperProps
}: NetworkInfoNavigationProps) => {
  return (
    <Stack direction="row" spacing={1} {...wrapperProps}>
      <NetworkNavButton userId={userId} isDisabled={isLoading}>
        <NetworkInfo
          count={followingCount}
          title="following"
          isLoading={isLoading}
          {...networkInfoStyles}
        />
      </NetworkNavButton>
      <NetworkNavButton userId={userId} isDisabled={isLoading}>
        <NetworkInfo
          count={followersCount}
          title="followers"
          isLoading={isLoading}
          {...networkInfoStyles}
        />
      </NetworkNavButton>
    </Stack>
  );
};
export default NetworkInfoNavigation;
