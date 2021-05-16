import React from 'react';
import CancelSession from './CancelSession';
import SessionIndex from './SessionIndex';
import DeleteSession from './DeleteSession';

const SessionHeader = ({experience, el, index}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return (
    <p>
      <span>
        {el.isCanceled ? (
          <SessionIndex index={index} />
        ) : el.isLaunched ? (
          <CancelSession experience={experience} el={el} options={options} index={index} />
        ) : (
          <DeleteSession experience={experience} el={el} index={index} />
        )}
      </span>
    </p>
  );
};

export default SessionHeader;
