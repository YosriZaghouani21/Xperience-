import React from 'react';
import {Row, Col} from 'reactstrap';
import AuthNavbar from '../layout/AuthNavbar';
import PopOver from '../layout/PopOver';
import Loader from '../layout/Loader';
const PeopleReserved = ({experience, el, index}) => {
  return (
    <>
      <PopOver
        title="Personnes qui ont réservées"
        index={`Popover${index + 1}`}
        text={el.reservationDemand.map(s => (
          <>
            <span>{s.userName}</span>
            <br />
          </>
        ))}
        header="Demandes de réservation"
      />
    </>
  );
};

export default PeopleReserved;
