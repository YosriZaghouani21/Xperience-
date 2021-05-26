import React from 'react';
import {Card, CardBody} from 'reactstrap';
import SessionHeader from './SessionHeader';
import SessionNote from './SessionNote';
import SessionTableDates from './SessionTableDates';
import PostPublicationSessionHandler from './PostPublicationSessionHandler';

const PublishedSession = ({experience, el, index}) => {
  return (
    <>
      <Card className=" col-xl-8 bg-secondary border-0 rounded overflow-auto">
        <CardBody className="bg-white border rounded mb-1 ">
          <SessionHeader experience={experience} el={el} index={index} />
          <SessionNote experience={experience} el={el} />
          <SessionTableDates el={el} />
          <PostPublicationSessionHandler experience={experience} el={el} index={index} />
        </CardBody>
      </Card>
    </>
  );
};

export default PublishedSession;
