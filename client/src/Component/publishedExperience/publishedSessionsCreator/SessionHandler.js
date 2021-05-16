import React from 'react';
import {Row, Col} from 'reactstrap';
import PeopleInterested from '../PeopleInterested';
import PeopleReserved from '../../Reservation/PeopleReserved';
import ReservationDemand from '../../reservationDemand/ReservationDemand';

const SessionHandler = ({experience, el, index}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      {el.isCanceled ? (
        <></>
      ) : el.isLaunched ? (
        <Row>
          <Col xl="4">
            <PeopleReserved experience={experience} el={el} index={index} />
          </Col>
          <Col>
            <ReservationDemand el={el} index={index} experience={experience} options={options} />
          </Col>
        </Row>
      ) : (
        <PeopleInterested experience={experience} el={el} index={index} />
      )}
    </>
  );
};

export default SessionHandler;
