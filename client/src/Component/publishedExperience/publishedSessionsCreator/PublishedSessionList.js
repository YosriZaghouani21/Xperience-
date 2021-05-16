import React, {useEffect, useState} from 'react';
import {Card, CardBody, Row} from 'reactstrap';
import {getExperienceDetails} from '../../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../layout/Loader';
import PublishedSession from './PublishedSession';
import AuthNavbar from '../../layout/AuthNavbar';
import AddSession from './AddSession';

const PublishedSessionList = ({
  match: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experiencesReducers.experience);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  var today = useState(new Date());

  useEffect(() => {
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log('molka1');
    if (experience) {
      console.log('molka2');
      experience.sessions.map(el => {
        if (new Date(el.sessionDate) <= today) {
          el.isPassed = true;
          console.log('molka3');
          // dispatch(updateExperience(id, experience._id));
        }
      });
    }
  }, [today, dispatch, id]);

  return isLoading ? (
    <Loader />
  ) : experience ? (
    <>
      <AuthNavbar />
      <Card className="bg-transparent border-0 mt-4">
        <CardBody>
          <h1 className="text-center">Les sessions de "{experience.title}"</h1>
          <AddSession id={id} />
          <Row className="col-xl-12 justify-content-center">
            {experience.sessions.map((el, index) => (
              <PublishedSession key={index} experience={experience} el={el} index={index} />
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
