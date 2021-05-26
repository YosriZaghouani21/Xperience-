import React from 'react';
import {Col} from 'reactstrap';
import AuthNavbar from '../../../layout/AuthNavbar';
import {Link} from 'react-router-dom';
import IntroHeader from './IntroHeader';
import IntroDefinition from './IntroDefinition';
import IntroImages from './IntroImages';

const Intro = ({
  match: {
    params: {id},
  },
}) => {
  return (
    <>
      <AuthNavbar />
      <Col xl="6" className="center mt-1">
        <Col className="center text-center">
          <IntroHeader />
          <IntroDefinition />
        </Col>
      </Col>
      <IntroImages />
      <div className="d-flex justify-content-center">
        <Link to={`/session/${id}`} className="btn btn-success float-right mt-3 mb-5">
          J'ai compris, je veux commencer
        </Link>
      </div>
    </>
  );
};

export default Intro;
