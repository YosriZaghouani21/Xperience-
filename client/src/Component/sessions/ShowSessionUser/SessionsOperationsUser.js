import React from 'react';
import AskForReservation from '../../Reservation/AskForReservation';
import Interest from './Interest';
import Disinterest from './Disinterest';

const SessionsOperationsUser = ({experience, el, user}) => {
  return (
    <>
      {el.isLaunched ? (
        <AskForReservation experience={experience} el={el} user={user} />
      ) : el.peopleInterrested.filter(e => e.userId === user._id).length > 0 ? (
        <Disinterest experience={experience} el={el} user={user} />
      ) : (
        <Interest experience={experience} el={el} user={user} />
      )}
    </>
  );
};

export default SessionsOperationsUser;
