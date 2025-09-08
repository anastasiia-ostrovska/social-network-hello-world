import { ProfileInfoSection } from '@widgets/profile-info';
import { useProfilePage } from './modal/useProfilePage';

const ProfilePage = () => {
  const {
    userId,
    handleShowPhotosEditorModal,
    handleShowDetailsEditorModal,
    handleShowContactsModal,
  } = useProfilePage();

  return (
    <ProfileInfoSection
      userId={userId}
      onEditPhotosClick={handleShowPhotosEditorModal}
      onShowContactsClick={handleShowContactsModal}
      onEditDetailsClick={handleShowDetailsEditorModal}
    />
  );
};

export default ProfilePage;
