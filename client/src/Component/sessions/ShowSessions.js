import React, {useState} from 'react';
import {Button, Card, CardHeader, CardBody, Row, Col} from 'reactstrap';
import {updateExperience} from '../../JS/actions';

const ShowSessions = ({experience, text}) => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const [showInterest, setShowInterrest] = useState(true);
  return (
    <>
      <Card className="bg-white shadow border mt-2">
        <CardHeader className="bg-white text-center">
          <b>Les sessions disponibles</b>
        </CardHeader>
        <span className="mt-2 text-center" style={{fontWeight: 'bold'}}>
          {experience.price} TND <small>Par personne</small>
        </span>
        <CardBody>
          <Card className="bg-white border-0 rounded overflow-auto">
            {experience.sessions.map((el, index) => (
              <CardBody className="bg-white border rounded mb-1">
                <Row>
                  <Col>
                    <p className="text-info" style={{fontWeight: 'bold'}}>
                      Session {index + 1}
                    </p>
                  </Col>
                </Row>
                <p>
                  <span style={{fontWeight: 'bold'}}> La date limite de paiement</span>
                  <br />
                  {new Date(el.paymentLimit).toLocaleDateString('fr-EG', options)}
                </p>
                <p>
                  <span style={{fontWeight: 'bold'}}> La date de déroulement </span>
                  <br />
                  {new Date(el.sessionDate).toLocaleDateString('fr-EG', options)}
                </p>
                {el.isLunched ? <Button>Réserver</Button> : <Button>S'intéresser</Button>}
              </CardBody>
            ))}
          </Card>
        </CardBody>
      </Card>
    </>
  );
};

export default ShowSessions;
