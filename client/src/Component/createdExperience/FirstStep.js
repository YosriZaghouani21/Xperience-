import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button, Progress} from 'reactstrap';
import Advice from '../layout/Advice';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {createNewExperience} from '../../JS/actions';
import CardBase from '../SharedComponent/CardBase/CardBase';
import ModalBase from '../SharedComponent/ModalBase/ModalBase';

const FirstStep = () => {
  const [type, setType] = useState('en ligne');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const localExperience = useSelector(state => state.localExperience);
  useEffect(() => {
    if (localExperience && localExperience.type) {
      setType(localExperience.type.title);
    }
  }, [dispatch, localExperience]);

  return (
    <>
      <div style={{backgroundColor: '#f8f9fe'}}>
        <Advice />
        <div className="main-content">
          <Container fluid>
            <div>
              <div className="text-center">1 de 6</div>
              <Progress style={{height: '21px'}} value="15">
                20%
              </Progress>
            </div>
            <div className="header-body border-0" style={{padding: '2%', margin: '1%'}}>
              <Button
                onClick={toggle}
                style={{
                  padding: '0.5% 0.5% 0%',
                  float: 'right',
                }}
              >
                <i className="ni ni-fat-remove" />
              </Button>
              <ModalBase
                isOpen={modal}
                toggle={toggle}
                title="Abandonner la création ?"
                linkedAddress="/experience"
              >
                Si vous abandonner la création, vous perderz toutes les informations saisies.
              </ModalBase>
              <Col lg="5" md="10">
                <h2 style={{color: '#32325d'}}>
                  <i className="fas fa-users-cog" style={{padding: '2%'}} />
                  Le type de l'expérience
                </h2>
              </Col>
              <Row>
                <Col lg="6" xl="5">
                  <CardBase
                    title="Les personnes participent en ligne à travers Zoom"
                    cardIcon="ni ni-laptop"
                  >
                    <Row>
                      <button
                        className="btn-icon-clipboard"
                        style={
                          type === 'en ligne'
                            ? {
                                backgroundColor: 'white',
                                boxShadow:
                                  'rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 16px',
                              }
                            : {}
                        }
                        onClick={() => setType('en ligne')}
                      >
                        <div>
                          <i className="ni ni-active-40" />
                          <span className="font-weight-bold color-gray-dark">En ligne</span>
                        </div>
                      </button>
                    </Row>
                    <Row>
                      <CardBase title="De quoi as-tu besoin ?">
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Un bon éclairage
                        </span>
                        <br />
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Une connexion internet
                        </span>
                        <br />
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Un son clair
                        </span>
                      </CardBase>
                    </Row>
                  </CardBase>
                </Col>
                {/* second onsite experience */}
                <Col lg="6" xl="5">
                  <CardBase title="Les personnes participent en présentiel" cardIcon="fas fa-users">
                    <Row>
                      <button
                        className="btn-icon-clipboard"
                        style={
                          type === 'en personne'
                            ? {
                                backgroundColor: 'white',
                                boxShadow:
                                  'rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 16px',
                              }
                            : {}
                        }
                        onClick={() => setType('en personne')}
                      >
                        <div>
                          <i className="ni ni-active-40" />
                          <span className="font-weight-bold color-gray-dark">En personne</span>
                        </div>
                      </button>
                    </Row>
                    <Row>
                      <CardBase title="De quoi as-tu besoin ?">
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Savoir établir des liens
                        </span>
                        <br />
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Un accueil de qualité
                        </span>
                        <br />
                        <span className="text-nowrap">
                          <i className="ni ni-bold-right" />
                          Un sens d'organisation
                        </span>
                      </CardBase>
                    </Row>
                  </CardBase>
                </Col>
              </Row>
              <div>
                <Link
                  to={`/second`}
                  className="btn btn-primary mt-4"
                  onClick={() => {
                    dispatch(createNewExperience({type: {title: type}}));
                  }}
                >
                  Suivant
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
