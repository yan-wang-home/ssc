import './home.scss';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert, Card } from 'reactstrap';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import HomepagePage from 'app/modules/pages/Homepage/index';
import ErrorBoundary from 'app/shared/error/error-boundary';
import Header from 'app/shared/layout/header/header';
import { ToastContainer, toast } from 'react-toastify';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

export const Admin = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSession());
    dispatch(getProfile());
  }, []);

  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);
  const account = useAppSelector(state => state.authentication.account);

  const paddingTop = '60px';
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
      <div className="container-fluid view-container" id="app-view-container">
        <Card className="jh-card">
          <ErrorBoundary>
            <Row>
              <Col md="12">
                <h1 className="display-4">
                  <Translate contentKey="home.title">Welcome To Smart Solutions Capital</Translate>
                </h1>
                <p className="lead">
                  <Translate contentKey="home.subtitle">This is your homepage</Translate>
                </p>
                {account?.login ? (
                  <div>
                    <Alert color="success">
                      <Translate
                        contentKey="home.logged.message"
                        interpolate={{ username: account.login, applicationStatus: account.applicationStatus }}
                      >
                        You are logged in as user {account.login}.
                      </Translate>
                    </Alert>
                  </div>
                ) : (
                  <div>
                    {/* <Alert color="warning"> */}
                    {/*   <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate> */}

                    {/*   <Link to="/login" className="alert-link"> */}
                    {/*     <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate> */}
                    {/*   </Link> */}
                    {/*   <Translate contentKey="global.messages.info.authenticated.suffix"> */}
                    {/*     , you can try the default accounts: */}
                    {/*     <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;) */}
                    {/*     <br />- User (login=&quot;user&quot; and password=&quot;user&quot;). */}
                    {/*   </Translate> */}
                    {/* </Alert> */}

                    <Alert color="warning">
                      <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
                      <Link to="/account/register" className="alert-link">
                        <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
                      </Link>
                    </Alert>
                  </div>
                )}
              </Col>
            </Row>
          </ErrorBoundary>
        </Card>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Admin;
