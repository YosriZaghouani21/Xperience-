import React, {useState} from 'react';
import {Row, Col, Button} from 'reactstrap';
import AuthNavbar from '../layout/AuthNavbar';
const PublishIndex = props => {
  return (
    <>
      <AuthNavbar />
      <Col xl="6" className="center mt-1">
        <Col style={{textAlign: 'center'}} className="center">
          <h1 style={{fontSize: 'xxx-large'}}>
            Plus que quelques étapes à faire pour accueillir des participants
          </h1>
        </Col>
        <Col xl="8" className=" text-center center">
          <p>
            Ci-dessous un résumé pour vous aider à avoir une vision complète sur le processus de
            publication
          </p>
        </Col>
        <Row className="col-xl-8 text-center center">
          <Col xl="12">
            <img
              style={{width: '80%'}}
              alt="..."
              src={require('../../Assets/img/brand/step1.png').default}
            />
            <p>
              1. Prenez votre temps à vérifier les détails de votre expérience. Il faut que vous
              soyez satisfait du résultat final.
            </p>
            <Button size="sm">Consulter</Button>
          </Col>
          <Col xl="12">
            <img
              style={{width: '80%'}}
              alt="..."
              src={require('../../Assets/img/brand/step2.png').default}
            />
            <p>
              2. vous allez indiquer vos disponibilités sur le calendrier et accueillir vos premiers
              participants quand vous le souhaitez.
            </p>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default PublishIndex;
