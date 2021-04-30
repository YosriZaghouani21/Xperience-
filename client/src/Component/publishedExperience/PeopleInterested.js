import React from 'react';
import {Row, Col} from 'reactstrap';
import AuthNavbar from '../layout/AuthNavbar';
import PopOver from '../layout/PopOver';
import Loader from '../layout/Loader';
const PeopleInterested = ({experience, el, index}) => {
  return (
    <>
      <PopOver
        title="Personnes intéressées"
        index={`Popover${index + 1}`}
        text={el.peopleInterrested.map(s => (
          <>
            <span>{s.userName}</span>
            <br />
          </>
        ))}
        header="Personnes intéressées"
      />
    </>
  );
};

export default PeopleInterested;
