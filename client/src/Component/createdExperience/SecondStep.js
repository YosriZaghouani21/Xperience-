import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {createNewExperience} from '../../JS/actions';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import {
  deleteExperience,
  getExperienceDetails,
  getExperiences,
  updateExperience,
} from '../../JS/actions/index';
import Advice2 from '../layout/Advice2';
import Loader from '../layout/Loader';

const SecondStep = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const localExperience = useSelector(state => state.localExperience);

  const addTheme = e => {
    if (e.target.checked) {
      setTheme([...new Set([...theme, e.target.name])]);
    } else {
      const arr = theme.filter(t => t !== e.target.name);
      setTheme(arr);
    }
  };
  const defaultThemes = [
    'Nature',
    'Bien-etre',
    'Art et culture',
    'Sport',
    'Cuisine',
    'Etude',
    'Animaux',
    'Autres',
  ];
  const [title, setTitle] = useState(' ');
  const [theme, setTheme] = useState([]);
  const [activity, setActivity] = useState(' ');
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (localExperience) {
      if (localExperience.themes) {
        setTheme(localExperience.themes);
        setActivity(localExperience.activity);
        setPrice(localExperience.price);
      }
      if (localExperience.title) {
        setTitle(localExperience.title);
      }
    }
  }, [localExperience]);

  return (
    <>
      <Advice2 />
      <div className="main-content">
        <Container fluid>
          {/* Progress bar */}
          <div className="text-center">2 de 6</div>
          <Progress multi style={{height: '21px'}}>
            <Progress bar value="20">
              40%
            </Progress>
          </Progress>
          {/* main  */}
          <Col lg="12" md="12">
            <div className="header-body border-0" style={{padding: '2%', margin: '1%'}}>
              {/* step title  */}
              <Col lg="6" md="10">
                <h2 style={{color: '#32325d'}}>
                  <i className="ni ni-collection" style={{padding: '2%'}} /> Les informations de
                  base
                </h2>
              </Col>
              {/* end step title */}
              {/* card */}
              <Card className=" shadow border-0">
                {/* experience type */}
                <CardHeader className="bg-transparent">
                  {localExperience.type && localExperience.type.title === 'en ligne' ? (
                    <div className="icon icon-shape bg-secondary text-black rounded-circle shadow">
                      <i className="ni ni-laptop" />
                    </div>
                  ) : (
                    <div className="icon icon-shape bg-secondary text-black rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  )}

                  <span> Expérience {localExperience.type ? localExperience.type.title : ''} </span>
                </CardHeader>
                {/* end experience type */}
                {/* form */}
                <CardBody className="px-lg-5 py-lg-5">
                  {/* title */}
                  <FormGroup
                    className="mb-3 border"
                    style={{padding: '2%', borderRadius: '0.375rem'}}
                  >
                    <div>
                      <small className="font-weight-bold">Donnez un titre à votre expérience</small>
                    </div>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-caps-small" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={e => setTitle(e.target.value)}
                        defaultValue={localExperience && localExperience.title}
                        placeholder="Titre"
                        type="string"
                        autoComplete="new-password"
                        name="titre"
                      />
                    </InputGroup>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      Le titre de l'expérience doit etre court et attirant
                    </span>
                    <br />
                  </FormGroup>
                  {/* end title */}
                  {/* themes */}
                  <FormGroup
                    className="mb-3 border"
                    style={{padding: '2%', borderRadius: '0.375rem'}}
                  >
                    <div>
                      <small className="font-weight-bold">
                        Choisissez le thème qui décrit le mieux l'activité principale de votre
                        expérience
                      </small>
                    </div>
                    <Row className="icon-examples">
                      {defaultThemes.map(theme => (
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            {localExperience.themes == null ? (
                              <input
                                className="custom-control-input"
                                id={`custom+${theme}`}
                                type="checkbox"
                                name={theme}
                                onChange={e => {
                                  addTheme(e);
                                }}
                              />
                            ) : (
                              <input
                                defaultChecked={localExperience.themes.includes(theme)}
                                className="custom-control-input"
                                id={`custom+${theme}`}
                                type="checkbox"
                                name={theme}
                                onChange={e => {
                                  addTheme(e);
                                }}
                              />
                            )}

                            <label className="custom-control-label" htmlFor={`custom+${theme}`}>
                              <span className="text-muted">{theme} </span>
                            </label>
                          </div>
                        </Col>
                      ))}
                    </Row>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      Les expériences les plus uniques ont plusieurs thèmes
                    </span>
                  </FormGroup>
                  {/* end themes */}
                  {/* activite */}
                  <FormGroup
                    className="mb-3 border"
                    style={{padding: '2%', borderRadius: '0.375rem'}}
                  >
                    <div>
                      <small className="font-weight-bold">
                        Donnez l'activité principale de votre expérience
                      </small>
                    </div>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-air-baloon" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={e => setActivity(e.target.value)}
                        placeholder="L'activité de l'expérience"
                        type="string"
                        autoComplete="new-password"
                        name="activity"
                        defaultValue={localExperience && localExperience.activity}
                      />
                    </InputGroup>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      Une activité réussie a un role de transmission de savoir, divertissement ou
                      initiation à une discipline
                    </span>
                    <br />
                  </FormGroup>
                  {/* end activite */}
                  {/* price */}
                  <FormGroup
                    className="mb-3 border"
                    style={{padding: '2%', borderRadius: '0.375rem'}}
                  >
                    <div>
                      <small className="font-weight-bold">
                        Fixez un prix par personne à votre expérience ( en dinar tunisien)
                      </small>
                    </div>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-wallet" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Le prix de l'expérience"
                        type="number"
                        autoComplete="new-password"
                        name="price"
                        min="5"
                        max="1000"
                        defaultValue={localExperience && localExperience.price}
                      />
                    </InputGroup>
                    <span className="mr-2 text-sm" style={{color: '#2dce89'}}>
                      <i className="ni ni-bulb-61" />
                      {price - (price * 5) / 100} est votre gain net par personne{' '}
                      <small>
                        <Link className="text-muted">en savoir plus</Link>
                      </small>
                      .
                    </span>
                    <br />
                  </FormGroup>
                  {/* end price */}
                </CardBody>
              </Card>
              {/* endCard */}
              <div className="mt-4">
                <Link
                  to={`/create`}
                  className="btn"
                  style={{color: '#5e72e4', backgroundColor: '#fff'}}
                >
                  Précédent
                </Link>
                {localExperience &&
                title !== ' ' &&
                theme !== [] &&
                activity !== ' ' &&
                price !== ' ' ? (
                  <Link
                    to={`/third`}
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(
                        createNewExperience({
                          ...localExperience,
                          title: title,
                          themes: [...theme],
                          activity: activity,
                          price: price,
                        })
                      );
                    }}
                  >
                    Suivant
                  </Link>
                ) : (
                  <Button className="btn-primary" color="primary" disabled>
                    Suivant
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default SecondStep;
