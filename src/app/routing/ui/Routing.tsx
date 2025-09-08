import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@shared/consts';
import { useRedirect } from '@shared/lib';
import { AppLayout } from '@app/layout';
import NotFoundPage from '@pages/not-found';
import LoginPage from '@pages/login-page';
import Components from '@/_old-version/components-presentation/Components';
import ProtectedRoute from './ProtectedRoute';
import AuthorizedRoutes from './AuthorizedRoutes';

interface RoutingProps {
  userId: string | undefined;
}

const Routing = ({ userId }: RoutingProps) => {
  const { redirectedFrom } = useRedirect({ altRoute: ROUTES.HOME });

  return (
    <Routes>
      {/* Private Route Login - Accessible only if the user is not authorized */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <ProtectedRoute isAllowed={!userId} redirectPath={redirectedFrom}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      {/* Private Routes - Requires Authentication */}
      <Route
        element={
          <ProtectedRoute isAllowed={!!userId} redirectPath={ROUTES.LOGIN} />
        }
      >
        <Route path={ROUTES.ROOT} element={<AppLayout />}>
          {AuthorizedRoutes({ userId } as { userId: string })}
        </Route>
      </Route>
      {/* Public Route (temporary) - Components Presentation */}
      <Route path="/components" element={<Components />} />
      {/* Public Route - 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </Routes>
  );
};

export default Routing;
