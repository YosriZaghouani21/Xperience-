import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNewExperience} from '../../JS/actions';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Advice5 from '../layout/Advice5';
import {Link, Redirect} from 'react-router-dom';
import Loader from '../layout/Loader';
const FifthStep = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const localExperience = useSelector(state => state.localExperience);

  const [program, setProgram] = useState({});
  const [excludedEq, setExcludedEq] = useState({});
  const [includedEq, setIncludedEq] = useState({});

  useEffect(() => {
    if (localExperience) {
      if (localExperience.program) {
        setProgram(localExperience.program.generalDesc);
      }
      if (localExperience.includedEq) {
        setIncludedEq(localExperience.includedEq);
      }
      if (localExperience.excludedEq) {
        setExcludedEq(localExperience.excludedEq);
      }
    }
  }, [localExperience]);
  return (
    <>
      <Advice5 />
      <div className="main-content">
        <Container fluid>
          {/* progress */}
          <div className="text-center">5 de 6</div>
          <Progress multi style={{height: '21px'}}>
            <Progress bar value="90">
              90%
            </Progress>
          </Progress>
          <Col lg="12" md="12">
            <div className="header-body border-0" style={{padding: '2%', margin: '1%'}}>
              {/* step title */}
              <Col lg="7" md="10">
                <h2 style={{color: '#32325d'}}>
                  <i class="far fa-file-alt" style={{padding: '2%'}} />
                  Le programme de l'expérience
                </h2>
              </Col>
              {/* form */}
              <Form>
                <Card className=" shadow border-0">
                  <CardHeader className="bg-transparent">
                    {/* experience type */}
                    {localExperience && localExperience.type.title === 'en ligne' ? (
                      <div className="icon icon-shape bg-secondary text-black rounded-circle shadow">
                        <i className="ni ni-laptop" />
                      </div>
                    ) : (
                      <div className="icon icon-shape bg-secondary text-black rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    )}
                    <span> Expérience {localExperience && localExperience.type.title} </span>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    {/* global description */}
                    <Col lg="12" md="12">
                      <p
                        for="exampleText"
                        className="h3 font-weight-bold mb-0"
                        style={{paddingTop: '2%'}}
                      >
                        <i className="fas fa-align-justify" style={{paddingRight: '1%'}} />
                        Description générale
                      </p>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          rows="7"
                          defaultValue={
                            localExperience.program
                              ? localExperience.program.generalDesc
                              : program.generalDesc
                          }
                          onChange={e =>
                            setProgram({
                              generalDesc: e.target.value,
                            })
                          }
                          placeholder="Rédiger ici.."
                        />
                        <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                          <i className="ni ni-bulb-61" />
                          Votre description doit donner envie de participer à votre expérience.
                          Imaginez qu'elle raconte une histoire, avec un début, un milieu et une
                          fin.{' '}
                        </span>
                      </FormGroup>
                    </Col>
                    <h3 className="font-weight-bold mb-0" style={{padding: '2%'}}>
                      Les équipements inclus
                    </h3>
                    <Row>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className=" mb-0">A manger</CardTitle>
                              </div>

                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-utensils" />
                                </div>
                              </Col>
                            </Row>

                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setIncludedEq({
                                      ...includedEq,
                                      food: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.includedEq
                                      ? localExperience.includedEq.food
                                        ? localExperience.includedEq.food
                                        : includedEq.food
                                      : includedEq.food
                                  }
                                  placeholder="Entrez ici la nourriture"
                                  type="textarea"
                                  maxlength="150"
                                  name="nourriture"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className="mb-0">A boire</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-wine-bottle" />{' '}
                                </div>
                              </Col>
                            </Row>
                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setIncludedEq({
                                      ...includedEq,
                                      drink: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.includedEq
                                      ? localExperience.includedEq.drink
                                        ? localExperience.includedEq.drink
                                        : includedEq.drink
                                      : includedEq.drink
                                  }
                                  placeholder="Entrez ici les boissons"
                                  type="textarea"
                                  name="drink"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className=" mb-0">Matériels</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-archive" />{' '}
                                </div>
                              </Col>
                            </Row>
                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setIncludedEq({
                                      ...includedEq,
                                      material: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.includedEq
                                      ? localExperience.includedEq.material
                                        ? localExperience.includedEq.material
                                        : includedEq.material
                                      : includedEq.material
                                  }
                                  placeholder="Entrez ici le matériel"
                                  type="textarea"
                                  name="matériel"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      Si les participants ont besoins de quoique ce soit pour profiter de
                      l'expérience précisez le ici{' '}
                    </span>
                    <br />
                    <small className="mr-2 " style={{color: 'grey'}}>
                      <i className="fas fa-info-circle" style={{paddingRight: '1%'}} />
                      Cette partie est facultative{' '}
                    </small>

                    <h3 className="font-weight-bold mb-0" style={{padding: '2%'}}>
                      Les équipements exclus
                    </h3>
                    <Row>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className=" mb-0">A manger</CardTitle>
                              </div>

                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-utensils" />
                                </div>
                              </Col>
                            </Row>

                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      food: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.excludedEq
                                      ? localExperience.excludedEq.food
                                        ? localExperience.excludedEq.food
                                        : excludedEq.food
                                      : excludedEq.food
                                  }
                                  placeholder="Entrez ici la nourriture"
                                  type="textarea"
                                  name="nourriture"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className="mb-0">A boire</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-wine-bottle" />{' '}
                                </div>
                              </Col>
                            </Row>
                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      drink: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.excludedEq
                                      ? localExperience.excludedEq.drink
                                        ? localExperience.excludedEq.drink
                                        : excludedEq.drink
                                      : excludedEq.drink
                                  }
                                  placeholder="Entrez ici les boissons"
                                  type="textarea"
                                  name="drink"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{padding: '5%'}}>
                            <Row>
                              <div className="col" style={{paddingTop: '5%'}}>
                                <CardTitle className=" mb-0">Matériels</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-archive" />{' '}
                                </div>
                              </Col>
                            </Row>
                            <div style={{paddingTop: '3%'}}>
                              <FormGroup>
                                <Input
                                  onChange={e =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      material: e.target.value,
                                    })
                                  }
                                  defaultValue={
                                    localExperience.excludedEq
                                      ? localExperience.excludedEq.material
                                        ? localExperience.excludedEq.material
                                        : excludedEq.material
                                      : excludedEq.material
                                  }
                                  placeholder="Entrez ici le matériel"
                                  type="textarea"
                                  name="matériel"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      Si vous allez offrir quoique ce soit aux participants précisez le ici{' '}
                    </span>
                    <br />
                    <small className="mr-2 " style={{color: 'grey'}}>
                      <i className="fas fa-info-circle" style={{paddingRight: '1%'}} />
                      Cette partie est facultative{' '}
                    </small>
                  </CardBody>
                </Card>
                <div className="mt-4">
                  <Link
                    to={`/fourth`}
                    className="btn"
                    style={{color: '#5e72e4', backgroundColor: '#fff'}}
                  >
                    Précédent
                  </Link>
                  {program !== {} ? (
                    <Link
                      to={`/image`}
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(
                          createNewExperience({
                            ...localExperience,
                            program: {generalDesc: program.generalDesc},
                            excludedEq: {...excludedEq},
                            includedEq: {...includedEq},
                            status: 'created',
                          })
                        );
                      }}
                    >
                      suivant
                    </Link>
                  ) : (
                    <Button className="btn btn-primary" color="primary" disabled>
                      Enregistrer
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FifthStep;
