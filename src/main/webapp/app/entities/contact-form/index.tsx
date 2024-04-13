import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ContactForm from './contact-form';
import ContactFormDetail from './contact-form-detail';
import ContactFormUpdate from './contact-form-update';
import ContactFormDeleteDialog from './contact-form-delete-dialog';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

const ContactFormRoutes = () => {
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
        <Route index element={<ContactForm />} />
        <Route path="new" element={<ContactFormUpdate />} />
        <Route path=":id">
          <Route index element={<ContactFormDetail />} />
          <Route path="edit" element={<ContactFormUpdate />} />
          <Route path="delete" element={<ContactFormDeleteDialog />} />
        </Route>
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default ContactFormRoutes;
