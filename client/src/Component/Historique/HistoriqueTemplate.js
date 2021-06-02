import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Popover,
  PopoverHeader,
  PopoverBody,
  Badge,
  Col,
  Row,
} from 'reactstrap';

const HistoriqueTemplate = props => {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Card className="p-0 shadow mb-3">
        <CardHeader>
          {props.title}
          {props.icone}
        </CardHeader>
        <Row className="col-xl-12 p-0 ml-0">
          <Col xl="6" className="p-0">
            <img style={{width: '100%', height: '300px'}} src={props.experienceImg} alt="..." />
          </Col>
          <Col xl="6" className="p-0">
            <CardBody>
              <CardTitle tag="h5">{props.themes}</CardTitle>
              <CardText>{props.activity}</CardText>

              <CardTitle tag="h4">
                Proposé par {props.creatorName}
                <Badge color="info" id="Popover1" pill className="ml-2">
                  Info
                </Badge>
                <Popover placement="right" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                  <PopoverHeader className="text-center">
                    <i className="fas fa-user-alt " />
                  </PopoverHeader>
                  <PopoverBody className="text-center">
                    <i className="fas fa-phone-alt" /> {props.creatorTel}
                    <br />
                    <i className="fas fa-at" /> {props.creatorEmail}
                  </PopoverBody>
                </Popover>
              </CardTitle>
              <CardText>
                <small className="text-muted">
                  <i className="fas fa-bell" />{' '}
                  {new Date(props.sessionDate).toLocaleDateString('fr-EG', options)}
                </small>
                <br />
                <small className="text-muted">
                  <i className="far fa-clock" />
                  {props.time}
                </small>
                <br />
                <small className="text-muted">
                  <i className="fas fa-map-marker-alt" /> {props.destination}
                </small>
              </CardText>
            </CardBody>
          </Col>
        </Row>
        <CardFooter>
          <Row className="text-center">
            <Col>
              <Link to={props.consulter} style={{color: '#525f7f'}}>
                Consulter
              </Link>
            </Col>
            <Col>
              <Link to="/reclamation" style={{color: '#525f7f'}}>
                Réclamer
              </Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HistoriqueTemplate;
