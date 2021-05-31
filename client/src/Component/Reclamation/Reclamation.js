import React from 'react';
import AuthNavbarExperience from '../layout/AuthNavbarExperience';
import Footer from '../layout/Footer';

const Reclamation = () => {
  return (
    <>
      <AuthNavbarExperience />
      <img alt="..." width="25%" src={require('../../Assets/img/brand/reclamation.png').default} />
      <Footer />
    </>
  );
};

export default Reclamation;
