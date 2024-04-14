import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, InputGroup, FormGroup, Form, Row, Col, Table } from 'reactstrap';
import { Translate, translate, getSortState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ASC, DESC, SORT } from 'app/shared/util/pagination.constants';
import { overrideSortStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { searchEntities, getEntities } from './rate-config.reducer';

export const RateConfig = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [sortState, setSortState] = useState(overrideSortStateWithQueryParams(getSortState(pageLocation, 'id'), pageLocation.search));

  const rateConfigList = useAppSelector(state => state.rateConfig.entities);
  const loading = useAppSelector(state => state.rateConfig.loading);

  const getAllEntities = () => {
    if (search) {
      dispatch(
        searchEntities({
          query: search,
          sort: `${sortState.sort},${sortState.order}`,
        }),
      );
    } else {
      dispatch(
        getEntities({
          sort: `${sortState.sort},${sortState.order}`,
        }),
      );
    }
  };

  const startSearching = e => {
    if (search) {
      dispatch(
        searchEntities({
          query: search,
          sort: `${sortState.sort},${sortState.order}`,
        }),
      );
    }
    e.preventDefault();
  };

  const clear = () => {
    setSearch('');
    dispatch(getEntities({}));
  };

  const handleSearch = event => setSearch(event.target.value);

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?sort=${sortState.sort},${sortState.order}`;
    if (pageLocation.search !== endURL) {
      navigate(`${pageLocation.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [sortState.order, sortState.sort, search]);

  const sort = p => () => {
    setSortState({
      ...sortState,
      order: sortState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handleSyncList = () => {
    sortEntities();
  };

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = sortState.sort;
    const order = sortState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div className="pt-20 px-4">
      <h2 id="rate-config-heading" data-cy="RateConfigHeading">
        <div className="text-blue-900 font-bold text-2xl pb-3">
          <Translate contentKey="mortgageHubApp.rateConfig.home.title">Rate Configs</Translate>
        </div>
        <div className="d-flex justify-content-end p-3">
          <Button className="me-2 text-blue-900" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="mortgageHubApp.rateConfig.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/rate-config/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="mortgageHubApp.rateConfig.home.createLabel">Create new Rate Config</Translate>
          </Link>
        </div>
      </h2>
      <Row>
        <Col sm="12">
          <Form onSubmit={startSearching}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="search"
                  defaultValue={search}
                  onChange={handleSearch}
                  placeholder={translate('mortgageHubApp.rateConfig.home.search')}
                />
                <Button className="input-group-addon">
                  <FontAwesomeIcon icon="search" />
                </Button>
                <Button type="reset" className="input-group-addon" onClick={clear}>
                  <FontAwesomeIcon icon="trash" />
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <div className="table-responsive">
        {rateConfigList && rateConfigList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('oneYearFixedInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedInsured">One Year Fixed Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('oneYearFixedInsured')} />
                </th>
                <th className="hand" onClick={sort('oneYearFixedInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedInsurable">One Year Fixed Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('oneYearFixedInsurable')} />
                </th>
                <th className="hand" onClick={sort('oneYearFixedConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.oneYearFixedConventional">One Year Fixed Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('oneYearFixedConventional')} />
                </th>
                <th className="hand" onClick={sort('twoYearFixedInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedInsured">Two Year Fixed Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('twoYearFixedInsured')} />
                </th>
                <th className="hand" onClick={sort('twoYearFixedInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedInsurable">Two Year Fixed Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('twoYearFixedInsurable')} />
                </th>
                <th className="hand" onClick={sort('twoYearFixedConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.twoYearFixedConventional">Two Year Fixed Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('twoYearFixedConventional')} />
                </th>
                <th className="hand" onClick={sort('threeYearFixedInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedInsured">Three Year Fixed Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('threeYearFixedInsured')} />
                </th>
                <th className="hand" onClick={sort('threeYearFixedInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedInsurable">Three Year Fixed Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('threeYearFixedInsurable')} />
                </th>
                <th className="hand" onClick={sort('threeYearFixedConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.threeYearFixedConventional">Three Year Fixed Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('threeYearFixedConventional')} />
                </th>
                <th className="hand" onClick={sort('fourYearFixedInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedInsured">Four Year Fixed Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fourYearFixedInsured')} />
                </th>
                <th className="hand" onClick={sort('fourYearFixedInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedInsurable">Four Year Fixed Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fourYearFixedInsurable')} />
                </th>
                <th className="hand" onClick={sort('fourYearFixedConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fourYearFixedConventional">Four Year Fixed Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fourYearFixedConventional')} />
                </th>
                <th className="hand" onClick={sort('fiveYearFixedInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedInsured">Five Year Fixed Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearFixedInsured')} />
                </th>
                <th className="hand" onClick={sort('fiveYearFixedInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedInsurable">Five Year Fixed Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearFixedInsurable')} />
                </th>
                <th className="hand" onClick={sort('fiveYearFixedConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearFixedConventional">Five Year Fixed Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearFixedConventional')} />
                </th>
                <th className="hand" onClick={sort('fiveYearVariableInsured')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableInsured">Five Year Variable Insured</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearVariableInsured')} />
                </th>
                <th className="hand" onClick={sort('fiveYearVariableInsurable')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableInsurable">Five Year Variable Insurable</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearVariableInsurable')} />
                </th>
                <th className="hand" onClick={sort('fiveYearVariableConventional')}>
                  <Translate contentKey="mortgageHubApp.rateConfig.fiveYearVariableConventional">Five Year Variable Conventional</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('fiveYearVariableConventional')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rateConfigList.map((rateConfig, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/rate-config/${rateConfig.id}`} color="link" size="sm">
                      {rateConfig.id}
                    </Button>
                  </td>
                  <td>{rateConfig.oneYearFixedInsured}</td>
                  <td>{rateConfig.oneYearFixedInsurable}</td>
                  <td>{rateConfig.oneYearFixedConventional}</td>
                  <td>{rateConfig.twoYearFixedInsured}</td>
                  <td>{rateConfig.twoYearFixedInsurable}</td>
                  <td>{rateConfig.twoYearFixedConventional}</td>
                  <td>{rateConfig.threeYearFixedInsured}</td>
                  <td>{rateConfig.threeYearFixedInsurable}</td>
                  <td>{rateConfig.threeYearFixedConventional}</td>
                  <td>{rateConfig.fourYearFixedInsured}</td>
                  <td>{rateConfig.fourYearFixedInsurable}</td>
                  <td>{rateConfig.fourYearFixedConventional}</td>
                  <td>{rateConfig.fiveYearFixedInsured}</td>
                  <td>{rateConfig.fiveYearFixedInsurable}</td>
                  <td>{rateConfig.fiveYearFixedConventional}</td>
                  <td>{rateConfig.fiveYearVariableInsured}</td>
                  <td>{rateConfig.fiveYearVariableInsurable}</td>
                  <td>{rateConfig.fiveYearVariableConventional}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/rate-config/${rateConfig.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/rate-config/${rateConfig.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        onClick={() => (window.location.href = `/rate-config/${rateConfig.id}/delete`)}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                        className="me-2 text-red-500"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="mortgageHubApp.rateConfig.home.notFound">No Rate Configs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RateConfig;
