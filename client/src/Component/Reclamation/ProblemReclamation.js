import React from 'react';
import {Card, CardTitle, CardText, Col} from 'reactstrap';
import FormTemplate from './FormTemplate';

const ProblemReclamation = () => {
  return (
    <Col sm="5">
      <img
        style={{marginLeft: '15%'}}
        alt="..."
        width="70%"
        src={require('../../Assets/img/brand/angry.png').default}
      />
      <Card body>
        <CardTitle tag="h5">Signaler un problème</CardTitle>
        <CardText>
          Vous voulez signaler une fonctionnalité qui ne marche pas sur Xperience, un contenu abusif
          ou un problème liée à une expérience ? Veuillez nous l'indiquer ici.
        </CardText>
      </Card>
      <div className="m-2">
        <FormTemplate labelText="Problème" placeholderText="Décrivez le problème rencontré" />
      </div>
    </Col>
  );
};

export default ProblemReclamation;
