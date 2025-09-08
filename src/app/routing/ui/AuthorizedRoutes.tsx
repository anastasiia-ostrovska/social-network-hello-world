import { Navigate, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@shared/consts';
import RouteSuspense from '@app/routing/ui/RouteSuspense';

const HomePage = lazy(() => import('@/pages/Home'));
const ProfilePage = lazy(() => import('@pages/profile-page'));
const NetworkPage = lazy(() => import('@pages/network-page'));
const DialogsPage = lazy(
  () => import('@/_old-version/components/Dialogs/Dialogs')
);
const NotificationsPage = lazy(() => import('@/pages/Notifications'));
const NewPostPage = lazy(() => import('@/pages/NewPost'));
const FavouritesPage = lazy(() => import('@/pages/Favourites'));
const LibraryPage = lazy(() => import('@/pages/Library'));
const SettingsPage = lazy(() => import('@/pages/Settings'));

const AuthorizedRoutes = ({ userId }: { userId: string }) => {
  return (
    <>
      <Route index element={<RouteSuspense element={<HomePage />} />} />
      <Route
        path={ROUTES.HOME}
        element={<RouteSuspense element={<HomePage />} />}
      />
      <Route
        path={`${ROUTES.PROFILE_NETWORK}/:userId`}
        element={<RouteSuspense element={<HomePage />} />}
      />
      <Route
        path={`${ROUTES.PROFILE}/:userId`}
        element={<RouteSuspense element={<ProfilePage />} />}
      />
      <Route
        path={ROUTES.PROFILE}
        element={<Navigate to={`${ROUTES.PROFILE}/${userId}`} />}
      />
      <Route
        path={ROUTES.NETWORK}
        element={<RouteSuspense element={<NetworkPage />} />}
      />
      <Route
        path={ROUTES.DIALOGS}
        element={<RouteSuspense element={<DialogsPage />} />}
      />
      <Route
        path={ROUTES.NOTIFICATIONS}
        element={<RouteSuspense element={<NotificationsPage />} />}
      />
      <Route
        path={ROUTES.NEW_POST}
        element={<RouteSuspense element={<NewPostPage />} />}
      />
      <Route
        path={ROUTES.FAVOURITES}
        element={<RouteSuspense element={<FavouritesPage />} />}
      />
      <Route
        path={ROUTES.LIBRARY}
        element={<RouteSuspense element={<LibraryPage />} />}
      />
      <Route
        path={ROUTES.SETTINGS}
        element={<RouteSuspense element={<SettingsPage />} />}
      />
    </>
  );
};

export default AuthorizedRoutes;
