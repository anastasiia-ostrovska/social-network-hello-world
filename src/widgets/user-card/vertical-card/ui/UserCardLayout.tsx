import { ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { UserInfoProps } from '@features/user/user-info/model/types';
import { UserInfo } from '@features/user';

interface UserCardLayoutProps {
  isLoading: boolean;
  content: ReactElement;
  button: ReactElement;
}

export const UserCardLayout = ({
  isLoading,
  content,
  button,
}: UserCardLayoutProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        backgroundColor: 'customBackground.userCard',
        pointerEvents: isLoading ? 'none' : 'auto',
      }}
    >
      {content}
      <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        {button}
      </CardActions>
    </Card>
  );
};

export const CardInfoLayout = ({
  isLoading,
  name,
  jobTitle,
  country,
}: UserInfoProps) => {
  return (
    <CardContent sx={{ justifyContent: 'center' }}>
      <UserInfo
        isLoading={isLoading}
        name={name}
        jobTitle={jobTitle}
        country={country}
      />
    </CardContent>
  );
};
