import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails, deleteUser} from '../../JS/actions/index';
import {Card, CardBody, Row, Col, Button} from 'reactstrap';
import Loader from '../layout/Loader';
import AuthNavbar from '../layout/AuthNavbar';

import {Link, Redirect} from 'react-router-dom';
import DeleteModal from './DeleteModal';

const UserDetails = ({
  match: {
    params: {id},
  },
  props,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);

  const [profile, setProfile] = useState([
    {label: 'Nom et prénom', value: ''},
    {
      label: 'Date de naissance',
      value: '',
    },
    {label: 'Téléphone', value: ''},
    {label: 'Adresse email', value: ''},
    {
      label: 'Adresse postale',
      value: '',
    },
    {
      label: 'Description',
      value: '',
    },
  ]);
  useEffect(() => {
    if (user) {
      setProfile([
        {label: 'Nom et prénom', value: user.name},
        {
          label: 'Date de naissance',
          value: user.birthday ? user.birthday.substr(0, 10) : <small>-</small>,
        },
        {label: 'Téléphone', value: user.phoneNumber},
        {label: 'Adresse email', value: user.email},
        {
          label: 'Adresse postale',
          value: user.city && user.adress ? user.city + ', ' + user.adress : <small>-</small>,
        },
        {
          label: 'Description',
          value: user.aboutMe ? user.aboutMe : <small>-</small>,
        },
      ]);
    }
  }, [id]);

  return loading ? (
    <Loader />
  ) : user ? (
    <>
      <AuthNavbar />
      <Col lg="7" md="8" className="center mt-7">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody className="mb-0">
            <Button size="sm" className="btn-info" tag={Link} to="/admin">
              Retourner
            </Button>
            <div className="float-right ">
              <DeleteModal
                buttonLabel="Supprimer l'utilisateur"
                modalTitle="Suppression de l'utilisateur"
                modalBody="Supprimer l'utilisateur ? Attention, cette opération est irréversible"
                firstButton="Supprimer"
                click={() => {
                  dispatch(deleteUser());
                  <Redirect to="/admin" />;
                }}
              />
            </div>
          </CardBody>
          <hr className="m-0" />
          <CardBody>
            <h2>Les informations personnelles</h2>
            <Row>
              <div>
                <Row>
                  {profile.map(el => (
                    <>
                      <Col xl="4">
                        <small style={{color: '#32325d'}}>
                          <b>{el.label}</b>
                        </small>
                      </Col>
                      <Col xl="8">
                        <small>{el.value}</small>
                      </Col>
                    </>
                  ))}
                </Row>
              </div>
            </Row>
          </CardBody>
          <hr className="m-0" />
        </Card>
      </Col>
    </>
  ) : (
    ''
  );
};

export default UserDetails;
