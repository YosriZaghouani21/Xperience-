import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import {createNewExperience} from '../../JS/actions';
import Advice3 from '../layout/Advice3';
import Loader from '../layout/Loader';
import {
  deleteExperience,
  getExperienceDetails,
  getExperiences,
  updateExperience,
} from '../../JS/actions/index';

const ThirdStep = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const isLoading = useSelector(state => state.experiencesReducers.isLoading);
  const localExperience = useSelector(state => state.localExperience);

  const [target, setTarget] = useState([]);
  const [difficulty, setDifficulty] = useState(' ');
  const [language, setLanguage] = useState('Arabe');
  const [phobia, setPhobia] = useState([]);
  const [limitParticipants, setLimitParticipants] = useState(0);
  const defaultTarget = ['enfant', 'adulte'];
  const defaultPhobia = ['Claustrophobie', 'Acrophobie'];
  const defaultDifficulty = ['Léger', 'Modéré', 'Intense', 'Extreme'];
  const addPhobia = e => {
    if (e.target.checked) {
      setPhobia([...new Set([...phobia, e.target.name])]);
    } else {
      const arr = phobia.filter(p => p !== e.target.name);
      setPhobia(arr);
    }
  };

  useEffect(() => {
    if (localExperience) {
      if (localExperience.target) {
        setTarget(localExperience.target);
        setDifficulty(localExperience.difficulty);
        setPhobia(localExperience.phobia);
        setLimitParticipants(localExperience.limitParticipants);
        setLanguage(localExperience.language);
      }
    }
  }, [localExperience]);
  return (
    <>
      <Advice3 />
      <div className="main-content">
        <Container fluid>
          {/* progress */}
          <div className="text-center">3 de 6</div>
          <Progress multi style={{height: '21px'}}>
            <Progress bar value="30">
              60%
            </Progress>
          </Progress>
          {/* end progress */}
          <Col lg="12" md="12">
            {/* form */}
            <Form>
              <div className="header-body border-0" style={{padding: '2%', margin: '1%'}}>
                <Col lg="6" md="10">
                  <h2 style={{color: '#32325d'}}>
                    <i className="fas fa-street-view" style={{padding: '2%'}} />
                    La cible de l'expérience
                  </h2>
                </Col>
                {/* card */}
                <Card className=" shadow border-0">
                  {/* experience type */}
                  <CardHeader className="bg-transparent">
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
                  {/* end experience type */}
                  <CardBody className="px-lg-5 py-lg-5">
                    {/* target part */}
                    <FormGroup className="mb-3 border rounded" style={{padding: '2%'}}>
                      <div>
                        <small className="font-weight-bold">
                          Qui peut participer à votre expérience ?
                        </small>
                      </div>
                      <Row className="icon-examples">
                        {defaultTarget.map(tar => (
                          <Col lg="6" md="6">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              {localExperience.target == null ? (
                                <input
                                  className="custom-control-input"
                                  id={tar}
                                  type="checkbox"
                                  name={tar}
                                  onChange={e => {
                                    if (e.target.checked) {
                                      setTarget([...new Set([...target, e.target.name])]);
                                    } else {
                                      const arr = target.filter(t => t !== e.target.name);
                                      setTarget(arr);
                                    }
                                  }}
                                />
                              ) : (
                                <input
                                  className="custom-control-input"
                                  id={tar}
                                  type="checkbox"
                                  name={tar}
                                  defaultChecked={localExperience.target.includes(tar)}
                                  onChange={e => {
                                    if (e.target.checked) {
                                      setTarget([...new Set([...target, e.target.name])]);
                                    } else {
                                      const arr = target.filter(t => t !== e.target.name);
                                      setTarget(arr);
                                    }
                                  }}
                                />
                              )}
                              <label className="custom-control-label" htmlFor={tar}>
                                <span>{tar}</span>
                              </label>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                        <i className="ni ni-bulb-61" />
                        Les enfants doivent être accompagnés par leur tuteur légal
                      </span>
                    </FormGroup>
                    {/* difficulty part */}
                    <FormGroup className="mb-3 border rounded" style={{padding: '2%'}}>
                      <div>
                        <small className="font-weight-bold">
                          Quel niveau de difficulté les participants doivent-ils attendre de
                          l'activité ?
                        </small>
                      </div>
                      <Row className="icon-examples">
                        {defaultDifficulty.map(diff => (
                          <Col lg="3" md="6">
                            <FormGroup check>
                              <Label check>
                                {localExperience.difficulty == null ? (
                                  <Input
                                    type="radio"
                                    name="radio2"
                                    onChange={e => {
                                      if (e.target.checked) setDifficulty(diff);
                                    }}
                                  />
                                ) : (
                                  <Input
                                    defaultChecked={localExperience.difficulty === diff}
                                    type="radio"
                                    name="radio2"
                                    onChange={e => {
                                      if (e.target.checked) setDifficulty(diff);
                                    }}
                                  />
                                )}

                                <span className="mr-2 text-sm">{diff}</span>
                              </Label>
                            </FormGroup>
                          </Col>
                        ))}
                      </Row>
                    </FormGroup>
                    {/* phobia part */}
                    <FormGroup className="mb-3 border rounded" style={{padding: '2%'}}>
                      <div>
                        <small className="font-weight-bold">
                          Est ce que votre expérience n'est pas recommandée aux personnes qui
                          présentent une de ses phobies ? Si oui précisez-les.
                        </small>
                      </div>
                      <Row className="icon-examples">
                        {defaultPhobia.map(ph => (
                          <Col lg="6" md="6">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              {localExperience.phobia == null ? (
                                <input
                                  className="custom-control-input"
                                  id={ph}
                                  type="checkbox"
                                  name={ph}
                                  onChange={e => {
                                    addPhobia(e);
                                  }}
                                />
                              ) : (
                                <input
                                  defaultChecked={localExperience.phobia.includes(ph)}
                                  className="custom-control-input"
                                  id={ph}
                                  type="checkbox"
                                  name={ph}
                                  onChange={e => {
                                    addPhobia(e);
                                  }}
                                />
                              )}

                              <label className="custom-control-label" htmlFor={ph}>
                                <span>{ph}</span>
                              </label>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <small className="mr-2 " style={{color: 'grey'}}>
                        <i className="fas fa-info-circle" style={{paddingRight: '1%'}} />
                        Cette partie est facultative
                      </small>
                    </FormGroup>
                    {/* end phobia part */}
                    {/* limit participants part */}
                    <FormGroup className="mb-3 border rounded" style={{padding: '2%'}}>
                      <div>
                        <small className="font-weight-bold">
                          Donnez le nombre limite de participants de votre expérience
                        </small>
                      </div>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={e => setLimitParticipants(e.target.value)}
                          placeholder="Le nombre maximal de participants"
                          type="number"
                          min="1"
                          max="50"
                          autoComplete="new-password"
                          defaultValue={
                            localExperience ? localExperience.limitParticipants : limitParticipants
                          }
                          name="participants"
                        />
                      </InputGroup>
                      <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                        <i className="ni ni-bulb-61" />
                        Indiquez le nombre maximal de participants que vous pouvez gérer pendant
                        l'expérience
                      </span>
                      <br />
                    </FormGroup>
                    {/* end limit participants part */}
                    {/* language part */}
                    <FormGroup className="mb-3 border rounded" style={{padding: '2%'}}>
                      <small className="font-weight-bold">
                        En quelle langue proposerez-vous votre expérience ?
                      </small>
                      <Col lg="3" md="6">
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          onChange={e => {
                            e.target.value
                              ? setLanguage(e.target.value)
                              : console.log(e.target.value);
                          }}
                        >
                          {['Arabe', 'Français', 'Anglais', 'Allemand', 'Chinois', 'Turc'].map(l =>
                            localExperience.language === null ? (
                              <option> {l} </option>
                            ) : (
                              <option selected={localExperience.language === l}>{l}</option>
                            )
                          )}
                        </Input>
                      </Col>
                      <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                        <i className="ni ni-bulb-61" />
                        Sélectionnez la langue dans laquelle vous vous sentez suffisamment à l'aise
                        pour parler aux participants.
                      </span>
                    </FormGroup>
                    {/* end language part */}
                  </CardBody>
                </Card>
                {/* end card */}
                <div className="mt-4">
                  <Link
                    to={`/second`}
                    className="btn"
                    style={{color: '#5e72e4', backgroundColor: '#fff'}}
                  >
                    Précédent
                  </Link>
                  {localExperience &&
                  target !== [] &&
                  difficulty !== ' ' &&
                  limitParticipants !== 0 ? (
                    <Link
                      to={`/fourth`}
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(
                          createNewExperience({
                            ...localExperience,
                            target: target,
                            difficulty: difficulty,
                            limitParticipants: limitParticipants,
                            language: language,
                            phobia: phobia,
                          })
                        );
                      }}
                    >
                      Suivant
                    </Link>
                  ) : (
                    <Button color="primary" className="btn-primary" disabled>
                      Suivant
                    </Button>
                  )}
                </div>
              </div>
            </Form>
            {/* end form */}
          </Col>
        </Container>
      </div>
    </>
  );
};

export default ThirdStep;
