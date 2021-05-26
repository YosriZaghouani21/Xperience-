import React from 'react';
import {Card, CardBody} from 'reactstrap';
import DeleteSession from '../../post-publication sessions/SessionsOperations/DeleteSession';
import SessionTableDates from '../../post-publication sessions/SessionTableDates';
import LaunchSessionCustom from './LaunchSessionCustom';

const HandleSessionTemplate = ({el, index, id, experience}) => {
  return (
    <>
      <Card className=" col-xl-8 bg-secondary border-0 rounded overflow-auto">
        <CardBody className="bg-white border rounded mb-1 ">
          <DeleteSession experience={experience} el={el} index={index} />
          <LaunchSessionCustom experience={experience} el={el} index={index} id={id} />
          <SessionTableDates el={el} />
        </CardBody>
      </Card>
    </>
  );
};

export default HandleSessionTemplate;
