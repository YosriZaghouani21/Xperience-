import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperienceDetails, getProfile} from '../../JS/actions/index';
import Loader from '../layout/Loader';
import AuthNavbarExperience from '../layout/AuthNavbarExperience';
import Footer from '../layout/Footer';

import Paypal from '../Paypal/Paypal';
import {Card, CardBody, CardTitle, Col} from 'reactstrap';
import Intro from './Intro';
import FlouciComponent from '../Flouci/FlouciComponent';
const Payment = ({
  match: {
    params: {id},
  },
  match: {
    params: {session},
  },
}) => {
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experiencesReducers.experience);
  const user = useSelector(state => state.userReducer.user);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const loading = useSelector(state => state.userReducer.loading);
  const [sessionDate, setSessionDate] = useState('');
  const [userReservation, setUserReservation] = useState({});

  var sessionArr = [];
  var reservationArr = [];
  const client = {
    app_secret: '90c78dad-85fb-4236-9d8b-3bc40ef93e01',
    app_public: '66837a87-c4e0-48f0-9f94-258acd8a4127',
    payment_amount: '1000',
  };

  useEffect(() => {
    dispatch(getExperienceDetails(id));
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (experience && user) {
      sessionArr = experience.sessions.filter(s => s._id === session);
      setSessionDate(sessionArr[0].sessionDate);
      reservationArr = sessionArr[0].reservationDemand.filter(
        reservation => reservation.userId === user._id
      );
      setUserReservation(reservationArr[0]);
    }
  }, [experience, user]);

  return isLoading && loading ? (
    <>
      <AuthNavbarExperience />
      <Loader />
    </>
  ) : user && experience ? (
    <>
      <AuthNavbarExperience />
      <Col xl="5" className="center mt-5">
        <Card>
          <CardTitle className="text-center p-3 mb-0">
            <Intro experience={experience} sessionDate={sessionDate} />
          </CardTitle>
          <CardBody className="text-center">
            Payer avec
            <div style={{marginLeft: '27%'}}>
              <FlouciComponent client={client} />
            </div>
            Ou avec
            <Paypal experience={experience} id={id} userReservation={userReservation} />
          </CardBody>
        </Card>
      </Col>
      <Footer />
    </>
  ) : (
    <p></p>
  );
};

export default Payment;
