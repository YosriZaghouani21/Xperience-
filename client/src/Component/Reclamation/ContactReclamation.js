import React from 'react';
import {Card, CardTitle, CardText, Col} from 'reactstrap';
import FormTemplate from './FormTemplate';

const ContactReclamation = () => {
  return (
    <Col sm="5">
      <img
        style={{marginLeft: '15%'}}
        alt="..."
        width="70%"
        src={require('../../Assets/img/brand/contact.png').default}
      />
      <Card body>
        <CardTitle tag="h5">Demander une information</CardTitle>
        <CardText>
          Faites-nous part de vos quetions, nous y répondrons volontiers. Nous sommes également
          ouvert à toutes remarques ou suppopsition.
        </CardText>
      </Card>
      <div className="m-2">
        <FormTemplate labelText="Question" placeholderText="Entrez votre question" />
      </div>
    </Col>
  );
};

export default ContactReclamation;
