import React, {useEffect, useState} from 'react';
import {Card, CardBody, Row} from 'reactstrap';
import {getExperienceDetails} from '../../../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../layout/Loader';
import {Link} from 'react-router-dom';
import HandleSessionTemplate from './HandleSessionTemplate';

const HandleSessions = ({
  match: {
    params: {id},
  },
}) => {
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
      <Card className="bg-transparent border-0 mt-4">
        <CardBody>
          <h1 className="text-center">Les sessions sélectionnées</h1>
          <Row className="col-xl-12 justify-content-center">
            {experience.sessions.map((el, index) => (
              <HandleSessionTemplate id={id} el={el} index={index} experience={experience} />
            ))}
          </Row>
        </CardBody>
      </Card>
      {experience.sessions.length === 0 ? (
        <Link to={`/publication/${id}`} className="btn btn-success mb-3 mr-7 float-right">
          Terminer
        </Link>
      ) : (
        <Link to={`/people/${id}`} className="btn btn-success mb-3 mr-7 float-right">
          Terminer
        </Link>
      )}
    </>
  ) : (
    <></>
  );
};

export default HandleSessions;
