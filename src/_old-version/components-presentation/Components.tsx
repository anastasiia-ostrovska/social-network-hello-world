import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AvatarWithBgImage, UserAvatar } from '@entities/user';
import { ModeSwitcher } from '@features/mode-switcher';
import { LoginForm } from '@widgets/login-form';

const Components = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap', p: 2 }}
    >
      <Box sx={{ width: 50, height: 50 }}>
        <ModeSwitcher />
      </Box>
      <Stack spacing={1} direction="row" useFlexGap>
        <UserAvatar avatarSrc={null} name="Some Name" avatarSize={200} />
        <UserAvatar avatarSrc={null} name="john doe" avatarSize={100} />
        <UserAvatar avatarSrc={null} name="Nana" avatarSize={30} />
        <UserAvatar avatarSrc={null} name="" avatarSize={30} />
      </Stack>
      <Box
        sx={{
          width: '100%',
          height: 500,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
      >
        <AvatarWithBgImage
          name="Anna"
          avatarSize={150}
          avatarSrc={null}
          bgImageHeight={200}
          avatarPosition="left"
          avatarBorderColor="white"
          bgImageSrc="https://images.squarespace-cdn.com/content/v1/5d777de8109c315fd22faf3a/1652899582924-FPWXES6GG7EGOQSRDE16/unsplash-image-pQMM63GE7fo.jpg?format=2500w"
        />
      </Box>
      <Box
        sx={{
          width: 300,
          borderRadius: 5,
          height: 300,
          backgroundColor: 'white',
        }}
      >
        <AvatarWithBgImage
          name="Janine Goo"
          bgImageSrc={null}
          avatarSize={120}
          bgImageHeight={100}
          avatarSrc="https://everyone.plos.org/wp-content/uploads/sites/5/2021/02/kirsten-scaled-e1613041313402-982x1024.jpg"
          avatarBorderColor="white"
        />
      </Box>
      <Box
        sx={{
          width: 250,
          borderRadius: 2,
          height: 150,
          backgroundColor: 'white',
        }}
      >
        <AvatarWithBgImage
          name="Valery T"
          avatarSize={60}
          bgImageHeight={60}
          avatarSrc={null}
          bgImageSrc={null}
        />
      </Box>
      <LoginForm />
    </Stack>
  );
};

export default Components;
