import React from 'react';

const SessionDates = ({el}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      <p>
        <span style={{fontWeight: 'bold'}}> La date limite de paiement</span>
        <br />
        {new Date(el.paymentLimit).toLocaleDateString('fr-EG', options)}
      </p>
      <p>
        <span style={{fontWeight: 'bold'}}> La date de déroulement </span>
        <br />
        {new Date(el.sessionDate).toLocaleDateString('fr-EG', options)}
      </p>
    </>
  );
};

export default SessionDates;
