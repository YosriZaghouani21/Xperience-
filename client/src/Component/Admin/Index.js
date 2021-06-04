import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperiences, getProfile, getUsers} from '../../JS/actions/index';
import CreatedExperienceAd from './CreatedExperienceAd';
import Loader from '../layout/Loader';
import {Redirect} from 'react-router';

import {Button, Card, CardHeader, Table, Container, Row, Col} from 'reactstrap';
import SideBar from '../layout/SideBar';
import User from '../User';
import ExperienceTab from './ExperienceTab';

// core components

const Index = props => {
  const dispatch = useDispatch();
  const experiences = useSelector(state => state.experiencesReducers.experiences);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);
  const users = useSelector(state => state.userReducer.users);
  const [showUsers, setShowUsers] = useState('');

  useEffect(() => {
    dispatch(getExperiences());
    dispatch(getUsers());
    dispatch(getProfile());
  }, [dispatch]);

  return localStorage.getItem('token') ? (
    loading && isLoading ? (
      <Loader />
    ) : user && user.role === 'admin' ? (
      <>
        {/* Page content */}
        <SideBar />
        <div className="main-content">
          <Container className="mt-5" fluid>
            <Button
              className=" p-4 btn-info"
              onClick={() => {
                setShowUsers(false);
              }}
            >
              Les expériences
            </Button>
            <Button
              className="btn-danger p-4"
              onClick={() => {
                setShowUsers(true);
              }}
            >
              Les utilisateurs
            </Button>
            {showUsers ? (
              <Row className="mt-4">
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Les utilisateurs</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th></th>
                          <th scope="col">Nom et prénom</th>
                          <th scope="col">Statut</th>
                          <th scope="col">Téléphone</th>
                          <th scope="col">E-mail</th>
                          <th scope="col" />
                        </tr>
                      </thead>

                      {users && users.map(user => <User key={User._id} user={user} />)}
                    </Table>
                  </Card>
                </div>
              </Row>
            ) : (
              <Row className="mt-5 mb-5">
                <Col className="mb-5 mb-xl-0" xl="12">
                  <h1 className="mb-3">Les expériences</h1>
                </Col>
                <ExperienceTab
                  content1={
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Titre</th>
                          <th scope="col">état</th>

                          <th scope="col">Type</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {experiences &&
                          experiences.map(experience =>
                            experience.status === 'created' ? (
                              <CreatedExperienceAd key={experience._id} experience={experience} />
                            ) : (
                              <></>
                            )
                          )}
                      </tbody>
                    </Table>
                  }
                  content2={
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Titre</th>
                          <th scope="col">état</th>

                          <th scope="col">Type</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {experiences &&
                          experiences.map(experience =>
                            experience.status === 'beingValidated' ||
                            experience.status === 'contentValidated' ? (
                              <CreatedExperienceAd key={experience._id} experience={experience} />
                            ) : (
                              <></>
                            )
                          )}
                      </tbody>
                    </Table>
                  }
                  content3={
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Titre</th>
                          <th scope="col">état</th>

                          <th scope="col">Type</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {experiences &&
                          experiences.map(experience =>
                            experience.status === 'accepted' ? (
                              <CreatedExperienceAd key={experience._id} experience={experience} />
                            ) : (
                              <></>
                            )
                          )}
                      </tbody>
                    </Table>
                  }
                  content4={
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Titre</th>
                          <th scope="col">état</th>

                          <th scope="col">Type</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {experiences &&
                          experiences.map(experience =>
                            experience.status === 'refused' ? (
                              <CreatedExperienceAd key={experience._id} experience={experience} />
                            ) : (
                              <></>
                            )
                          )}
                      </tbody>
                    </Table>
                  }
                  content5={
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Titre</th>
                          <th scope="col">état</th>

                          <th scope="col">Type</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {experiences &&
                          experiences.map(experience =>
                            experience.status === 'published' ? (
                              <CreatedExperienceAd key={experience._id} experience={experience} />
                            ) : (
                              <></>
                            )
                          )}
                      </tbody>
                    </Table>
                  }
                />
              </Row>
            )}
          </Container>
        </div>
      </>
    ) : (
      <p></p>
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default Index;
