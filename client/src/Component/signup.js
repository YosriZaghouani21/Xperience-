import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import addUser from '../JS/actions/index';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
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
} from 'reactstrap';
import AuthNavbar from './layout/AuthNavbar';
import Loader from './layout/Loader';
import {useForm} from 'react-hook-form';
import Footer from './layout/Footer';

const Signup = props => {
  const loading = useSelector(state => state.userReducer.loading);
  const error = useSelector(state => state.userReducer.errors);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = e => {
    dispatch(
      addUser({
        name,
        email,
        password,
        phoneNumber,
      })
    );
    props.history.push('/login');
  };
  return loading ? (
    <Loader />
  ) : (
    <div className="main-content bg-white">
      <div className="header py-lg-6">
        <AuthNavbar />
        <Row className="col-xl-10 ml-9 display-flex justify-content-center">
          <Col xl="5" className="ml-9">
            <Card className="bg-secondary  border">
              <CardHeader className="bg-transparent">
                <div className="text-center">
                  <h3>Créer votre compte</h3>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nom et prénom"
                        onChange={e => setName(e.target.value)}
                        invalid={errors['name']}
                        innerRef={register({
                          required: 'Le champ nom est obligatoire.',
                        })}
                      />
                    </InputGroup>
                    {errors.name && (
                      <span className="mr-2 text-sm" style={{color: '#dd3a4a'}}>
                        {errors.name.message}
                      </span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={e => {
                          setEmail(e.target.value);
                        }}
                        invalid={errors['email']}
                        innerRef={register({
                          required: 'Le champ email est obligatoire.',
                        })}
                      />
                    </InputGroup>
                    {errors.email && (
                      <>
                        <span className="mr-2 text-sm" style={{color: '#dd3a4a'}}>
                          {errors.email.message}
                        </span>
                        <br />
                      </>
                    )}

                    {error && (
                      <span className="mr-2 text-sm" style={{color: '#dd3a4a'}}>
                        {error.msg}
                      </span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas fa-phone-alt" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="phonenumber"
                        placeholder="Numéro de téléphone"
                        onChange={e => setPhoneNumber(e.target.value)}
                        invalid={errors['phonenumber']}
                        innerRef={register({
                          required: 'Le champ téléphone est obligatoire.',
                        })}
                      />
                    </InputGroup>
                    {errors.phonenumber && (
                      <span className="mr-2 text-sm" style={{color: '#dd3a4a'}}>
                        {errors.phonenumber.message}
                      </span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="Password"
                        name="password"
                        placeholder="Mot de passe"
                        onChange={e => setPassword(e.target.value)}
                        invalid={errors['password']}
                        innerRef={register({
                          required: 'Le mot de passe est obligatoire.',
                        })}
                      />
                    </InputGroup>
                    {errors.password && (
                      <span className="mr-2 text-sm" style={{color: '#dd3a4a'}}>
                        {errors.password.message}
                      </span>
                    )}
                  </FormGroup>
                  <Row>
                    <Col>
                      <Link to="/login">
                        <div className="text-muted font-italic">
                          <small>Se connecter à un compte existant</small>
                        </div>
                      </Link>
                    </Col>
                    <Col>
                      <div className="text-center">
                        <Button color="info" type="submit">
                          S'inscrire
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <img
              alt="..."
              src={require('../Assets/img/brand/register.png').default}
              style={{width: '50%'}}
              className="mt-6"
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
