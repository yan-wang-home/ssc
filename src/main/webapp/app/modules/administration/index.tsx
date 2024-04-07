import React from 'react';

import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import UserManagement from './user-management';
import Logs from './logs/logs';
import Health from './health/health';
import Metrics from './metrics/metrics';
import Configuration from './configuration/configuration';
import Docs from './docs/docs';
import { useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { ToastContainer, toast } from 'react-toastify';

const AdministrationRoutes = () => {
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);
  const paddingTop = '80px';

  return (
    <div className="app-container" style={{ paddingTop }}>
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
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
      <div>
        <ErrorBoundaryRoutes>
          <Route path="user-management/*" element={<UserManagement />} />
          <Route path="health" element={<Health />} />
          <Route path="metrics" element={<Metrics />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="logs" element={<Logs />} />
          <Route path="docs" element={<Docs />} />
        </ErrorBoundaryRoutes>
      </div>
    </div>
  );
};

export default AdministrationRoutes;
