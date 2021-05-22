import React, {useEffect} from 'react';
import {Button, Card, CardHeader, CardBody, Row, Col} from 'reactstrap';
import {getProfile, updateExperience} from '../../../JS/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../layout/Loader';
import AskForReservation from '../../Reservation/AskForReservation';
import SessionIndex from '../post-publication sessions/SessionIndex';
import SessionDates from './SessionDates';
import Interest from './Interest';
import Disinterest from './Disinterest';
import SessionsOperationsUser from './SessionsOperationsUser';

const ShowSessions = ({experience}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : user ? (
    <>
      <Card className="bg-white shadow border mt-6">
        <CardHeader className="bg-white text-center">
          <b>Les sessions disponibles</b>
        </CardHeader>
        <span className="mt-2 text-center" style={{fontWeight: 'bold'}}>
          {experience.price} TND <small>Par personne</small>
        </span>
        <CardBody>
          <Card className="bg-white border-0 rounded overflow-auto">
            {experience.sessions.map((el, index) => (
              <CardBody className="bg-white border rounded mb-1">
                <SessionIndex index={index} />
                <SessionDates el={el} />
                <SessionsOperationsUser experience={experience} user={user} el={el} />
              </CardBody>
            ))}
          </Card>
        </CardBody>
      </Card>
    </>
  ) : (
    <></>
  );
};

export default ShowSessions;
