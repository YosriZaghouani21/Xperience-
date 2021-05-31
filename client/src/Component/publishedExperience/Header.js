import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'reactstrap';

const Header = () => {
  return (
    <>
      <p className="text-center justify-content-center row col-xl-12 bold">
        <Link className="col-xl-2 text-info">
          <u>Vivre une expérience</u>
        </Link>
        <Link className="col-xl-2 text-info" to="/creator">
          Créer une expérience
        </Link>
      </p>
      <Row className="col-xl-12 mt-5">
        <Col xl="3">
          <img
            alt="..."
            src={require('../../Assets/img/brand/World.png').default}
            style={{width: '47%'}}
          />
        </Col>
        <Col xl="6">
          <h1 className="text-center" style={{fontSize: 'xxx-large'}}>
            Explorons les passions de notre pays !
          </h1>
        </Col>
        <Col xl="3">
          <img
            alt="..."
            src={require('../../Assets/img/brand/World-rafiki.png').default}
            style={{width: '50%', float: 'right'}}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
