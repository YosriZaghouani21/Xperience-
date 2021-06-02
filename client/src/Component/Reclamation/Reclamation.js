import React from 'react';
import {Row, Col} from 'reactstrap';
import AuthNavbarExperience from '../layout/AuthNavbarExperience';
import Footer from '../layout/Footer';
import ReclamationModel from './ReclamationModel';

const Reclamation = () => {
  return (
    <>
      <AuthNavbarExperience />
      <Col style={{textAlign: 'center'}} className="center">
        <h1 style={{fontSize: '47px'}}>
          N'hésitez pas à nous contacter <br />
          nous vous écoutons
        </h1>
      </Col>
      <ReclamationModel />
      <Footer />
    </>
  );
};

export default Reclamation;
