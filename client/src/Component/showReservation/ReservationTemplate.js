import React from 'react';
import {Card, CardBody, Row, Col} from 'reactstrap';
import HandleReservation from './HandleReservation';
import ReservationStatus from './ReservationStatus';

const ReservationTemplate = ({experience, session, reservation}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      <Card className="card-stats mb-4 mb-xl-0 col-xl-7">
        <CardBody>
          <Row>
            <Col xl="8">{experience.title}</Col>
            <Col xl="4">
              <ReservationStatus reservation={reservation} />
            </Col>
          </Row>
          <br />
          <small>
            La session : {new Date(session.sessionDate).toLocaleDateString('fr-EG', options)}
            <br /> <span className="text-danger font-weight-bold">Limite de paiement : </span>
            {new Date(session.paymentLimit).toLocaleDateString('fr-EG', options)}
          </small>
          <br />
          <HandleReservation reservation={reservation} experience={experience} />
        </CardBody>
      </Card>
    </>
  );
};

export default ReservationTemplate;
