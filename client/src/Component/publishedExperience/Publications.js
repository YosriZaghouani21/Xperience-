import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperiences} from '../../JS/actions/index';
import {Col, Row, Card, CardBody, CardTitle} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import Loader from '../layout/Loader';
import AuthNavbar from '../layout/AuthNavbar';
import Publication from './Publication';

const Publications = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExperiences());
  }, [dispatch]);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const experiences = useSelector(state => state.experiencesReducers.experiences);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <AuthNavbar />
      <Row className="col-xl-12 justify-content-center">
        {experiences &&
          experiences.map(experience => (
            <Publication experience={experience} key={experience._id} />
          ))}
      </Row>
    </>
  );
};

export default Publications;
