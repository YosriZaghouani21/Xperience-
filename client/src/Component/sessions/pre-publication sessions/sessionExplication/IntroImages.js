import React from 'react';
import {Col} from 'reactstrap';

const IntroImages = () => {
  return (
    <>
      <Col xl="6" className="center">
        <img
          style={{width: '100%'}}
          alt="..."
          src={require('../../../../Assets/img/brand/session2.png').default}
        />
      </Col>
      <Col>
        <div className="col-xl-9 center text-center">
          <h1>Exemple d'un calendrier de sessions</h1>
          <img
            className="border rounded"
            style={{width: '80%'}}
            alt="..."
            src={require('../../../../Assets/img/brand/session.png').default}
          />
        </div>
      </Col>
    </>
  );
};

export default IntroImages;
