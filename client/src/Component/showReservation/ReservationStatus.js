import React from 'react';
import {Button} from 'reactstrap';

const ReservationStatus = ({reservation}) => {
  return (
    <>
      {reservation.status && reservation.status === 'accepted' ? (
        <Button size="sm" disabled className="float-right text-success">
          acceptée
        </Button>
      ) : reservation.status && reservation.status === 'refused' ? (
        <Button size="sm" disabled className="float-right text-danger">
          refusée
        </Button>
      ) : reservation.status && reservation.status === 'paid' ? (
        <Button size="sm" disabled className="float-right text-info">
          payée
        </Button>
      ) : reservation.status && reservation.status === 'canceledByParticipant' ? (
        <Button size="sm" disabled className="float-right">
          annulée
        </Button>
      ) : (
        <Button size="sm" disabled className="float-right text-yellow">
          en attente
        </Button>
      )}
    </>
  );
};

export default ReservationStatus;
