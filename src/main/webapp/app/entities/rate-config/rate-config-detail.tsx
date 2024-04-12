import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './rate-config.reducer';

export const RateConfigDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const rateConfigEntity = useAppSelector(state => state.rateConfig.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="rateConfigDetailsHeading">
          <Translate contentKey="mortgageHubApp.rateConfig.detail.title">RateConfig</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.id}</dd>
          <dt>
            <span id="oneYearFixedInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedInsured">One Year Fixed Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.oneYearFixedInsured}</dd>
          <dt>
            <span id="twoYearFixedInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedInsured">Two Year Fixed Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.twoYearFixedInsured}</dd>
          <dt>
            <span id="threeYearFixedInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedInsured">Three Year Fixed Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.threeYearFixedInsured}</dd>
          <dt>
            <span id="fourYearFixedInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedInsured">Four Year Fixed Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fourYearFixedInsured}</dd>
          <dt>
            <span id="fiveYearFixedInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedInsured">Five Year Fixed Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearFixedInsured}</dd>
          <dt>
            <span id="oneYearFixedInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedInsurable">One Year Fixed Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.oneYearFixedInsurable}</dd>
          <dt>
            <span id="twoYearFixedInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedInsurable">Two Year Fixed Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.twoYearFixedInsurable}</dd>
          <dt>
            <span id="threeYearFixedInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedInsurable">Three Year Fixed Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.threeYearFixedInsurable}</dd>
          <dt>
            <span id="fourYearFixedInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedInsurable">Four Year Fixed Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fourYearFixedInsurable}</dd>
          <dt>
            <span id="fiveYearFixedInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedInsurable">Five Year Fixed Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearFixedInsurable}</dd>
          <dt>
            <span id="oneYearFixedConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedConventional">One Year Fixed Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.oneYearFixedConventional}</dd>
          <dt>
            <span id="twoYearFixedConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedConventional">Two Year Fixed Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.twoYearFixedConventional}</dd>
          <dt>
            <span id="threeYearFixedConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedConventional">Three Year Fixed Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.threeYearFixedConventional}</dd>
          <dt>
            <span id="fourYearFixedConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedConventional">Four Year Fixed Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fourYearFixedConventional}</dd>
          <dt>
            <span id="fiveYearFixedConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedConventional">Five Year Fixed Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearFixedConventional}</dd>
          <dt>
            <span id="fiveYearVariableInsured">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableInsured">Five Year Variable Insured</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearVariableInsured}</dd>
          <dt>
            <span id="fiveYearVariableInsurable">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableInsurable">Five Year Variable Insurable</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearVariableInsurable}</dd>
          <dt>
            <span id="fiveYearVariableConventional">
              <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableConventional">Five Year Variable Conventional</Translate>
            </span>
          </dt>
          <dd>{rateConfigEntity.fiveYearVariableConventional}</dd>
        </dl>
        <Button tag={Link} to="/rate-config" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/rate-config/${rateConfigEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default RateConfigDetail;
