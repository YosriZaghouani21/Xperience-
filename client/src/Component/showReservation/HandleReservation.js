import React from 'react';
import {Link} from 'react-router-dom';

const HandleReservation = ({experience, reservation}) => {
  return (
    <>
      {reservation.status && reservation.status === 'accepted' ? (
        <>
          <Link
            to={`details/${experience._id}`}
            className="col-xl-3 mt-4 btn btn-info"
            style={{boxShadow: 'none', padding: '0.5%', fontSize: 'x-small'}}
          >
            consulter l'expérience
          </Link>
          <Link
            to={`payment/${experience._id}`}
            className="col-xl-2 mt-4 btn btn-success"
            style={{boxShadow: 'none', padding: '0.5%', fontSize: 'x-small'}}
          >
            Payer
          </Link>
        </>
      ) : (
        <Link
          to={`details/${experience._id}`}
          className="col-xl-3 mt-4 btn btn-info"
          style={{boxShadow: 'none', padding: '0.5%', fontSize: 'x-small'}}
        >
          consulter l'expérience
        </Link>
      )}
    </>
  );
};

export default HandleReservation;
