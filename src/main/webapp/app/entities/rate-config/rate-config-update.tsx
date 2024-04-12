import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IRateConfig } from 'app/shared/model/rate-config.model';
import { getEntity, updateEntity, createEntity, reset } from './rate-config.reducer';

export const RateConfigUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const rateConfigEntity = useAppSelector(state => state.rateConfig.entity);
  const loading = useAppSelector(state => state.rateConfig.loading);
  const updating = useAppSelector(state => state.rateConfig.updating);
  const updateSuccess = useAppSelector(state => state.rateConfig.updateSuccess);

  const handleClose = () => {
    navigate('/rate-config');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    const entity = {
      ...rateConfigEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...rateConfigEntity,
        };

  return (
    <div className="pt-20">
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="mortgageHubApp.rateConfig.home.createOrEditLabel" data-cy="RateConfigCreateUpdateHeading">
            <Translate contentKey="mortgageHubApp.rateConfig.home.createOrEditLabel">Create or edit a RateConfig</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  disabled
                  id="rate-config-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <h2 className="underline decoration-2">
                <Translate contentKey="mortgageHubApp.rateConfig.home.fixedRate"></Translate>
              </h2>
              <br />
              <ValidatedField
                className="pt-4"
                label={translate('mortgageHubApp.rateConfig.oneYearFixedInsured')}
                id="rate-config-oneYearFixedInsured"
                name="oneYearFixedInsured"
                data-cy="oneYearFixedInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.oneYearFixedInsurable')}
                id="rate-config-oneYearFixedInsurable"
                name="oneYearFixedInsurable"
                data-cy="oneYearFixedInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.oneYearFixedConventional')}
                id="rate-config-oneYearFixedConventional"
                name="oneYearFixedConventional"
                data-cy="oneYearFixedConventional"
                type="text"
              />
              <ValidatedField
                className="pt-4"
                label={translate('mortgageHubApp.rateConfig.twoYearFixedInsured')}
                id="rate-config-twoYearFixedInsured"
                name="twoYearFixedInsured"
                data-cy="twoYearFixedInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.twoYearFixedInsurable')}
                id="rate-config-twoYearFixedInsurable"
                name="twoYearFixedInsurable"
                data-cy="twoYearFixedInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.twoYearFixedConventional')}
                id="rate-config-twoYearFixedConventional"
                name="twoYearFixedConventional"
                data-cy="twoYearFixedConventional"
                type="text"
              />
              <ValidatedField
                className="pt-4"
                label={translate('mortgageHubApp.rateConfig.threeYearFixedInsured')}
                id="rate-config-threeYearFixedInsured"
                name="threeYearFixedInsured"
                data-cy="threeYearFixedInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.threeYearFixedInsurable')}
                id="rate-config-threeYearFixedInsurable"
                name="threeYearFixedInsurable"
                data-cy="threeYearFixedInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.threeYearFixedConventional')}
                id="rate-config-threeYearFixedConventional"
                name="threeYearFixedConventional"
                data-cy="threeYearFixedConventional"
                type="text"
              />
              <ValidatedField
                className="pt-4"
                label={translate('mortgageHubApp.rateConfig.fourYearFixedInsured')}
                id="rate-config-fourYearFixedInsured"
                name="fourYearFixedInsured"
                data-cy="fourYearFixedInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fourYearFixedInsurable')}
                id="rate-config-fourYearFixedInsurable"
                name="fourYearFixedInsurable"
                data-cy="fourYearFixedInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fourYearFixedConventional')}
                id="rate-config-fourYearFixedConventional"
                name="fourYearFixedConventional"
                data-cy="fourYearFixedConventional"
                type="text"
              />
              <ValidatedField
                className="pt-4"
                label={translate('mortgageHubApp.rateConfig.fiveYearFixedInsured')}
                id="rate-config-fiveYearFixedInsured"
                name="fiveYearFixedInsured"
                data-cy="fiveYearFixedInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fiveYearFixedInsurable')}
                id="rate-config-fiveYearFixedInsurable"
                name="fiveYearFixedInsurable"
                data-cy="fiveYearFixedInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fiveYearFixedConventional')}
                id="rate-config-fiveYearFixedConventional"
                name="fiveYearFixedConventional"
                data-cy="fiveYearFixedConventional"
                type="text"
              />
              <h2 className="underline decoration-2 pt-4">
                <Translate contentKey="mortgageHubApp.rateConfig.home.variableRate"></Translate>
              </h2>
              <br />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fiveYearVariableInsured')}
                id="rate-config-fiveYearVariableInsured"
                name="fiveYearVariableInsured"
                data-cy="fiveYearVariableInsured"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fiveYearVariableInsurable')}
                id="rate-config-fiveYearVariableInsurable"
                name="fiveYearVariableInsurable"
                data-cy="fiveYearVariableInsurable"
                type="text"
              />
              <ValidatedField
                label={translate('mortgageHubApp.rateConfig.fiveYearVariableConventional')}
                id="rate-config-fiveYearVariableConventional"
                name="fiveYearVariableConventional"
                data-cy="fiveYearVariableConventional"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/rate-config" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default RateConfigUpdate;
