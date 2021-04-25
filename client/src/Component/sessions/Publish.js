import React, {useEffect, useState} from 'react';
import Loader from '../layout/Loader';

import {useDispatch, useSelector} from 'react-redux';
import {getExperienceDetails, updateExperience, getExperiences} from '../../JS/actions/index';
import {Row, Col, Button} from 'reactstrap';
import AuthNavbar from '../layout/AuthNavbar';
import {Link, Redirect} from 'react-router-dom';
import Details from './Details';
import ShowSessions from './ShowSessions';
const Publish = ({
  match: {
    params: {id},
  },
}) => {
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const experience = useSelector(state => state.experiencesReducers.experience);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);
  return localStorage.getItem('token') ? (
    isLoading ? (
      <Loader />
    ) : experience ? (
      <>
        <div>
          <AuthNavbar />
          <Row className="col-xl-12" style={{justifyContent: 'center'}}>
            <Col xl="8" className="m-2">
              <Details experience={experience} />
            </Col>
            <Col xl="3">
              <ShowSessions experience={experience} />
              <Link
                to="/experiences"
                className="mt-2 col-xl-12 btn btn-success"
                onClick={() => {
                  dispatch(
                    updateExperience(id, {
                      ...experience,
                      status: 'published',
                    })
                  );
                }}
              >
                Publier
              </Link>
            </Col>
          </Row>
        </div>
      </>
    ) : (
      <p></p>
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
