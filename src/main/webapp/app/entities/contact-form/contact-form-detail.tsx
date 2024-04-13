import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './contact-form.reducer';

export const ContactFormDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const contactFormEntity = useAppSelector(state => state.contactForm.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="contactFormDetailsHeading">
          <Translate contentKey="mortgageHubApp.contactForm.detail.title">ContactForm</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{contactFormEntity.id}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="mortgageHubApp.contactForm.email">Email</Translate>
            </span>
          </dt>
          <dd>{contactFormEntity.email}</dd>
          <dt>
            <span id="subject">
              <Translate contentKey="mortgageHubApp.contactForm.subject">Subject</Translate>
            </span>
          </dt>
          <dd>{contactFormEntity.subject}</dd>
          <dt>
            <span id="message">
              <Translate contentKey="mortgageHubApp.contactForm.message">Message</Translate>
            </span>
          </dt>
          <dd>{contactFormEntity.message}</dd>
          <dt>
            <span id="subscribe">
              <Translate contentKey="mortgageHubApp.contactForm.subscribe">Subscribe</Translate>
            </span>
          </dt>
          <dd>{contactFormEntity.subscribe ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/contact-form" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/contact-form/${contactFormEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ContactFormDetail;
