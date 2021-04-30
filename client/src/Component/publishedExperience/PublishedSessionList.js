import React, {useEffect, useState} from 'react';
import {Button, Card, CardHeader, CardBody, Row, Col, Table, CustomInput} from 'reactstrap';
import {
  getExperienceDetails,
  getProfile,
  getSessionDetails,
  updateExperience,
  updateSession,
} from '../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../layout/Loader';
import {Link} from 'react-router-dom';
import PublishedSession from './PublishedSession';
import AuthNavbar from '../layout/AuthNavbar';

const PublishedSessionList = ({
  match: {
    params: {id},
  },
}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experiencesReducers.experience);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);

  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);

  return isLoading ? (
    <Loader />
  ) : experience ? (
    <>
      <AuthNavbar />
      <Card className="bg-transparent border-0 mt-4">
        <CardBody>
          <h1 className="text-center">Les sessions de "{experience.title}"</h1>
          <Row className="col-xl-12 justify-content-center">
            {experience.sessions.map((el, index) => (
              <PublishedSession experience={experience} el={el} index={index} />
            ))}
          </Row>
        </CardBody>
      </Card>
    </>
  ) : (
    <></>
  );
};

export default PublishedSessionList;
