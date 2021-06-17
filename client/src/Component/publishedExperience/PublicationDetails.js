import React, {useEffect} from 'react';
import {getExperienceDetails, getProfile, rating} from '../../JS/actions';
import {Col, Row} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../layout/Loader';
import AuthNavbar from '../layout/AuthNavbar';

import ShowSessions from '../sessions/ShowSessionUser/ShowSessions';
import {Link} from 'react-router-dom';
import Details from '../sessions/publicationStep/Details';
import Comment from '../../Component/Feedback/Comment';
import Likes from '../../Component/Feedback/Likes';
import Ratings from '../../Component/Feedback/Ratings';
const PublicationDetails = ({
  match: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const loading = useSelector(state => state.userReducer.loading);
  const user = useSelector(state => state.userReducer.user);
  const experience = useSelector(state => state.experiencesReducers.experience);

  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return isLoading && loading ? (
    <Loader />
  ) : experience && user ? (
    <>
      <AuthNavbar />
      <Row className="col-xl-12" style={{justifyContent: 'center'}}>
        <Col xl="8" className="m-2">
          <Link className="btn btn-secondary m-2" to="/explore">
            <i className="fas fa-arrow-left" /> plus d'expériences
          </Link>
          <Details experience={experience} />
        </Col>
        <Col xl="3">
          <ShowSessions experience={experience} user={user} />
        </Col>
        <Col xl="12" style={{justifyContent: 'left'}}>
          <h1>Les Feedback de cette expérience</h1>
          <Ratings experience={experience} />
          <Comment experience={experience} />
        </Col>

        <Likes experience={experience} />
      </Row>
    </>
  ) : (
    <p></p>
  );
};

export default PublicationDetails;
