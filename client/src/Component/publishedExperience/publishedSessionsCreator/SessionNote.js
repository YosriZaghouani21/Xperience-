import React from 'react';
import LaunchSession from './LaunchSession';

const SessionNote = ({experience, el}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return (
    <p>
      {el.isCanceled ? (
        <span>
          Vous avez annulé cette session le{' '}
          {new Date(el.cancelDate).toLocaleDateString('fr-EG', options)}
        </span>
      ) : el.isPassed && el.isLaunched ? (
        <span>Cette session est passée. Nous espérons qu'elle s'est bien déroulée.</span>
      ) : el.isPassed && el.isLaunched === false ? (
        <span>
          Cette session est passée.Vous avez retardé de la lancer avant la date limite de lancement.
        </span>
      ) : el.isLaunched ? (
        <span>lancée le {new Date(el.launchDate).toLocaleDateString('fr-EG', options)}</span>
      ) : (
        <LaunchSession experience={experience} el={el} />
      )}
    </p>
  );
};

export default SessionNote;
