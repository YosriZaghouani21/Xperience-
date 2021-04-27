import React from 'react';
import {Col, Row, Card, CardBody, CardTitle} from 'reactstrap';

const Header = () => {
  return (
    <>
      <Row className="col-xl-12">
        <Col xl="3">
          <img
            alt="..."
            src={require('../../Assets/img/brand/World.png').default}
            style={{width: '100%'}}
          />
        </Col>
        <Col xl="6">
          <h1 className="text-center pt-6" style={{fontSize: 'xxx-large'}}>
            Explorons les passions de notre pays !
          </h1>
        </Col>
        <Col xl="3">
          <img
            alt="..."
            src={require('../../Assets/img/brand/World-rafiki.png').default}
            style={{width: '100%'}}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;