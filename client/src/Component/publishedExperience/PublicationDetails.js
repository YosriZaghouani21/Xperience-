import React, {useEffect} from 'react';
import {getExperienceDetails, rating} from '../../JS/actions';
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
  const experience = useSelector(state => state.experiencesReducers.experience);

  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : experience ? (
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
          <ShowSessions experience={experience} />
        </Col>
        <h1>Comment</h1>
        <Comment experience={experience} />
        <Likes experience={experience} />
        <Ratings experience={experience} />
      </Row>
    </>
  ) : (
    <p></p>
  );
};

export default PublicationDetails;
