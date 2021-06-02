import React from 'react';
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';

const ReclamationContent = content => {
  return (
    <div>
      <Button color="primary" id="toggler" size="sm" className="m-2" style={{marginBottom: '1rem'}}>
        Voir le contenu
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>{content}</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default ReclamationContent;
