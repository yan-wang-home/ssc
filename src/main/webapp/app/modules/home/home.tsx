import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import HomepagePage from 'app/modules/pages/Homepage/index';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <HomepagePage />
    </>

    // <Row>
    //   <Col md="12">
    //     <h1 className="display-4">
    //       <Translate contentKey="home.title">Welcome To Smart Solutions Capital</Translate>
    //     </h1>
    //     <p className="lead">
    //       <Translate contentKey="home.subtitle">This is your homepage</Translate>
    //     </p>
    //     {account?.login ? (
    //       <div>
    //         <Alert color="success">
    //           <Translate
    //             contentKey="home.logged.message"
    //             interpolate={{ username: account.login, applicationStatus: account.applicationStatus }}
    //           >
    //             You are logged in as user {account.login} and Your Application Status: {account.applicationStatus}.
    //           </Translate>
    //         </Alert>
    //       </div>
    //     ) : (
    //       <div>
    //         <Alert color="warning">
    //           <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
    //
    //           <Link to="/login" className="alert-link">
    //             <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
    //           </Link>
    //           <Translate contentKey="global.messages.info.authenticated.suffix">
    //             , you can try the default accounts:
    //             <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
    //             <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
    //           </Translate>
    //         </Alert>
    //
    //         <Alert color="warning">
    //           <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
    //           <Link to="/account/register" className="alert-link">
    //             <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
    //           </Link>
    //         </Alert>
    //       </div>
    //     )}
    //   </Col>
    // </Row>
  );
};

export default Home;
