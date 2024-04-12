import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import RateConfig from './rate-config';
import RateConfigDetail from './rate-config-detail';
import RateConfigUpdate from './rate-config-update';
import RateConfigDeleteDialog from './rate-config-delete-dialog';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

const RateConfigRoutes = () => {
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);

  return (
    <div>
      <ErrorBoundary>
        <Header
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          currentLocale={currentLocale}
          ribbonEnv={ribbonEnv}
          isInProduction={isInProduction}
          isOpenAPIEnabled={isOpenAPIEnabled}
        />
      </ErrorBoundary>
      <ErrorBoundaryRoutes>
        <Route index element={<RateConfig />} />
        <Route path="new" element={<RateConfigUpdate />} />
        <Route path=":id">
          <Route index element={<RateConfigDetail />} />
          <Route path="edit" element={<RateConfigUpdate />} />
          <Route path="delete" element={<RateConfigDeleteDialog />} />
        </Route>
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default RateConfigRoutes;
