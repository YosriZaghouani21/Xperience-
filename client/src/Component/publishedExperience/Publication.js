import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperiences} from '../../JS/actions/index';
import {Col, Row, Card, CardBody, CardTitle, CardHeader, CardText} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import Loader from '../layout/Loader';
import AuthNavbar from '../layout/AuthNavbar';

const Publication = ({experience}) => {
  return (
    <>
      <Card className="shadow-sm col-xl-2 mr-3 border rounded p-0 ">
        <CardBody className="m-0 p-0" style={{height: '300px', width: '249px'}}>
          <img
            alt="image"
            className="p-0"
            src={experience.photo}
            style={{height: '100%', width: '100%'}}
          />
        </CardBody>
        <p>
          <small>{experience.title}</small>
        </p>
      </Card>
    </>
  );
};

export default Publication;
