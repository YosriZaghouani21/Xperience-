import React from 'react';
const Info = ({sessionDate, experience}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      <p className="text-gray-dark pt-3">
        <i className="fas fa-calendar-day" />{' '}
        {new Date(sessionDate).toLocaleDateString('fr-EG', options)} <br />
        <i className="far fa-clock" />
        {'  '} {experience.startHour}-{experience.endHour}
        <br />
        {experience.activity}
        <br />
        créée par {experience.user.name}
        <br />
      </p>
    </>
  );
};

export default Info;
