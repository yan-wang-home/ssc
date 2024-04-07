import React, { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { logout } from 'app/shared/reducers/authentication';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import ErrorBoundary from 'app/shared/error/error-boundary';
import Header from 'app/shared/layout/header/header';
import { ToastContainer, toast } from 'react-toastify';

export const Logout = () => {
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);
  const paddingTop = '80px';

  const logoutUrl = useAppSelector(state => state.authentication.logoutUrl);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(logout());
    if (logoutUrl) {
      window.location.href = logoutUrl;
    }
  });

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
      <div className="p-5">
        <h4>Logged out successfully!</h4>
      </div>
    </div>
  );
};

export default Logout;
