import React from 'react';
const Intro = ({experience, sessionDate}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return (
    <>
      <h2>
        <img width="35%" src={require('../../Assets/img/brand/Wallet-bro.png').default} /> <br />
        {experience.title}
      </h2>
      <small>
        {new Date(sessionDate).toLocaleDateString('fr-EG', options)}
        <br />
      </small>
    </>
  );
};

export default Intro;
