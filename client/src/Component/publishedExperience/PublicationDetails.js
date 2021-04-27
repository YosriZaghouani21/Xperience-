import React, {useEffect} from 'react';
import {getExperienceDetails} from '../../JS/actions';
import {Col, Row} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import Details from '../sessions/Details';
import Loader from '../layout/Loader';
import ShowSessions from '../sessions/ShowSessions';
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
      <Row className="col-xl-12" style={{justifyContent: 'center'}}>
        <Col xl="8" className="m-2">
          <Details experience={experience} />
        </Col>
        <Col xl="3">
          <ShowSessions experience={experience} />
        </Col>
      </Row>
    </>
  ) : (
    <p>fail</p>
  );
};

export default PublicationDetails;
