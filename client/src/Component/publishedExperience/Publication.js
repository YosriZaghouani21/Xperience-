import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExperiences} from '../../JS/actions/index';
import {Col, Row, Card, CardBody, CardTitle, CardHeader, CardText} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import Loader from '../layout/Loader';
import AuthNavbar from '../layout/AuthNavbar';

const Publication = ({experience}) => {
  const [like, setLike] = useState();
  return (
    <>
      <Card className="shadow-sm col-xl-2 mr-3 border rounded p-0 ">
        <CardBody className="p-0">
          <img
            alt="image"
            className="p-0"
            src={experience.photo}
            style={{height: '300px', width: '251px'}}
          />
        </CardBody>
        <CardBody className="pt-3 p-2">
          <button
            className="bg-transparent border-0"
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? <i className="fas fa-heart text-danger" /> : <i className="far fa-heart" />}
          </button>
          <small className="text-gray">{experience.city}</small>
          <small className="float-right pt-1 pr-2 font-weight-bold">
            {experience.price} TND/personne
          </small>
          <br />
          <Link to={`publication/${experience._id}`} className="text-gray-dark">
            <p
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingLeft: '4%',
              }}
            >
              {experience.title}
            </p>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default Publication;
