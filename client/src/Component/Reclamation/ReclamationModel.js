import React from 'react';
import {Row} from 'reactstrap';
import ContactReclamation from './ContactReclamation';
import ProblemReclamation from './ProblemReclamation';

const ReclamationModel = () => {
  return (
    <Row className="col-xl-10 center ml-7">
      <ContactReclamation />
      <ProblemReclamation />
    </Row>
  );
};

export default ReclamationModel;
