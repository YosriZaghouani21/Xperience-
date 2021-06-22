import React from 'react';
import {useSelector} from 'react-redux';

import {Card, CardHeader, CardBody, Col, Media, Row} from 'reactstrap';
import Comment from '../../../Component/Feedback/Comment';
import Ratings from '../../Feedback/Ratings';

const Details = () => {
  const experience = useSelector(state => state.experiencesReducers.experience.experience);
  return (
    <>
      <Card className="bg-white shadow border">
        <CardHeader className="bg-white">
          <div className="text-muted mt-2 mb-4">
            <small>
              {experience && experience.type && experience.type.title === 'en ligne' ? (
                <i className="ni ni-laptop" />
              ) : (
                <i className="fas fa-users" />
              )}
              Expérience {experience && experience.type && experience.type.title}
            </small>
            <h1 style={{margin: '0%'}}>{experience && experience.title}</h1>
            <small>{experience && experience.city}, Tunisie</small>

            <Row>
              <Col lg="10" md="8">
                <h3 style={{paddingTop: '2%'}}>
                  Expérience {experience && experience.type && experience.type.title} organisée par{' '}
                  {experience && experience.user && experience.user.name}
                </h3>
                <Ratings experience={experience} />
              </Col>
              <Col>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="..." src={experience && experience.user && experience.user.photo} />
                  </span>
                </Media>
              </Col>
            </Row>
            <div style={{padding: '2%'}}>
              <Row>
                <img
                  alt=""
                  className="border rounded p-0"
                  src={experience && experience.photo}
                  style={{height: '300px', width: '300px'}}
                />
                <img
                  alt=""
                  className="border rounded p-0"
                  src={experience && experience.photo2}
                  style={{height: '300px', width: '300px'}}
                />
                <img
                  alt=""
                  className="border rounded p-0"
                  src={experience && experience.photo3}
                  style={{height: '300px', width: '300px'}}
                />
              </Row>
            </div>
          </div>
          <Card className="bg-white border-1">
            <CardHeader className="bg-white">
              <Row className="icon-examples">
                <Col lg="6" md="6">
                  <p>
                    <i className="far fa-clock" style={{paddingRight: '3%'}} />
                    {experience && experience.startHour} - {experience && experience.endHour}
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <p>
                    <i className="fas fa-users" style={{paddingRight: '3%'}} /> Jusqu'à{' '}
                    {experience && experience.limitParticipants} personnes
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <p>
                    <i style={{paddingRight: '3%'}} className="far fa-comments" /> Proposé en{' '}
                    {experience && experience.language}
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <p>
                    <i style={{paddingRight: '3%'}} className="fas fa-wallet" />{' '}
                    {experience && experience.price} TND
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <p>
                    <i className="fas fa-street-view" style={{paddingRight: '4%'}} />
                    {experience && experience.target && experience.target[0]}
                    {experience && experience.target && experience.target[1] ? (
                      <span> et {experience && experience.target && experience.target[1]}</span>
                    ) : (
                      ''
                    )}
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <p>
                    <i className="fas fa-bolt" style={{paddingRight: '3%'}} />
                    niveau {experience && experience.difficulty}
                  </p>
                </Col>
                {experience && experience.phobia && experience.phobia.length !== 0 ? (
                  <Col lg="6" md="6">
                    <p>
                      <i className="fas fa-users-slash" style={{paddingRight: '3%'}} />
                      {experience && experience.phobia}
                    </p>
                  </Col>
                ) : (
                  <></>
                )}
              </Row>
            </CardHeader>
          </Card>
          <Card className="bg-white border-0">
            <CardBody style={{paddingBottom: '0%'}}>
              <h4 style={{marginBottom: '0%'}}>L'activité</h4>
              <small>
                {experience && experience.themes && experience.themes.map(el => <span>{el} </span>)}
              </small>
              <br />
              <p>{experience && experience.activity}</p>
            </CardBody>
          </Card>
        </CardHeader>
        <CardBody className="col-xl-10 border rounded center mt-4">
          <h4>Au programme</h4>
          <small>{experience && experience.program && experience.program.generalDesc}</small>
        </CardBody>
        {(experience && experience.includedEq) || (experience && experience.excludedEq) ? (
          <CardBody className="px-lg-5">
            <Card className="bg-white border-1">
              <CardHeader className="bg-white">
                <Row className="icon-examples">
                  {experience && experience.includedEq ? (
                    <Col lg="6" md="6">
                      <h4>Les équipements inclus</h4>
                      {experience && experience.includedEq.drink ? (
                        <p>
                          <i className="fas fa-wine-bottle" />{' '}
                          {experience && experience.includedEq.drink}
                        </p>
                      ) : (
                        <></>
                      )}
                      {experience && experience.includedEq.food ? (
                        <p>
                          <i className="fas fa-utensils" />{' '}
                          {experience && experience.includedEq.food}
                        </p>
                      ) : (
                        <></>
                      )}
                      {experience && experience.includedEq.material ? (
                        <p>
                          <i className="fas fa-archive" />
                          {'   '}
                          {experience && experience.includedEq.material}
                        </p>
                      ) : (
                        <></>
                      )}
                    </Col>
                  ) : (
                    <></>
                  )}

                  {experience && experience.excludedEq ? (
                    <Col lg="6" md="6">
                      <h4>Les équipements exclus</h4>
                      {experience && experience.excludedEq.drink ? (
                        <p>
                          {'   '} <i className="fas fa-wine-bottle" />{' '}
                          {experience && experience.excludedEq.drink}
                        </p>
                      ) : (
                        <></>
                      )}
                      {experience && experience.excludedEq.food ? (
                        <p>
                          {'   '} <i className="fas fa-utensils" />{' '}
                          {experience && experience.excludedEq.food}
                        </p>
                      ) : (
                        <></>
                      )}
                      {experience && experience.excludedEq.material ? (
                        <p>
                          <i className="fas fa-archive" />
                          {'   '}
                          {experience && experience.excludedEq.material}
                        </p>
                      ) : (
                        <></>
                      )}
                    </Col>
                  ) : (
                    <></>
                  )}
                </Row>
              </CardHeader>
            </Card>
          </CardBody>
        ) : (
          ''
        )}
      </Card>
    </>
  );
};
export default Details;
