import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperienceDetails, getProfile} from '../../JS/actions/index';
import Loader from '../layout/Loader';
import AuthNavbarExperience from '../layout/AuthNavbarExperience';
import Paypal from '../Paypal/Paypal';
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
  var sessionArr = [];
  var reservationArr = [];
  var userReservation;

  useEffect(() => {
    dispatch(getExperienceDetails(id));
    dispatch(getProfile());
  }, [dispatch]);
  useEffect(() => {
    if (experience && user) {
      sessionArr = experience.sessions.filter(s => s._id === session);
      reservationArr = sessionArr[0].reservationDemand.filter(
        reservation => reservation.userId === user._id
      );
      userReservation = reservationArr[0];
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
      <Paypal experience={experience} id={id} userReservation={userReservation} />
    </>
  ) : (
    <p></p>
  );
};

export default Payment;
