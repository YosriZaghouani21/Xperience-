import React from 'react';
import {Row, Col} from 'reactstrap';

const Intro = () => {
  return (
    <>
      <div>
        <Col xl="6" className="center mt-1">
          <Col style={{textAlign: 'center'}} className="center">
            <h1 style={{fontSize: '47px'}}>Historique des expériences vécues </h1>
          </Col>
          <Col xl="8" className=" text-center center">
            <p>Cela vous aidera à</p>
          </Col>
        </Col>
        <Row className="col-xl-12 text-center center">
          <Col xl="4">
            <img
              style={{width: '72%'}}
              alt="..."
              src={require('../../Assets/img/brand/history1.png').default}
            />
            <p>1. Traçabilité</p>
          </Col>
          <Col xl="4">
            <img
              style={{width: '80%'}}
              alt="..."
              src={require('../../Assets/img/brand/history3.png').default}
            />
            <p>2. Preuve de compétence.</p>
          </Col>
          <Col xl="4">
            <img
              style={{width: '72%'}}
              alt="..."
              src={require('../../Assets/img/brand/history2.png').default}
            />
            <p>3.Réclamation</p>
          </Col>
        </Row>
        <h1 style={{fontSize: '122px', textAlign: 'center'}}>
          <i class="fas fa-angle-down text-center" />
        </h1>
      </div>
    </>
  );
};

export default Intro;
