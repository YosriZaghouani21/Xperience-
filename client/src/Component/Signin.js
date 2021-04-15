import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../JS/actions";
import { useForm } from "react-hook-form";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import AuthNavbar from "./layout/AuthNavbar";
import Loader from "./layout/Loader";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.errors);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return localStorage.getItem("token") ? (
    <Redirect to="/" />
  ) : loading ? (
    <Loader />
  ) : (
    <div className="main-content">
      <div className="header bg-white py-7 py-lg-6">
        <AuthNavbar />

        <Col lg="5" md="8" className="center " style={{ padding: "1%" }}>
          <Card className="bg-secondary border">
            <CardHeader className="bg-transparent">
              <div className="text-center">
                <h3>Connexion</h3>
              </div>
            </CardHeader>

            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      invalid={errors["email"]}
                      innerRef={register({
                        required: "Le champ email est obligatoire.",
                      })}
                    />
                  </InputGroup>
                  {errors.email && (
                    <span className="mr-2 text-sm" style={{ color: "#dd3a4a" }}>
                      {errors.email.message}
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
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      invalid={errors["password"]}
                      innerRef={register({
                        required: "Veuillez saisir votre mot de passe",
                      })}
                    />
                  </InputGroup>
                  {errors.password && (
                    <>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#dd3a4a" }}
                      >
                        {errors.password.message}
                      </span>{" "}
                      <br />
                    </>
                  )}
                  {error && (
                    <span className="mr-2 text-sm" style={{ color: "#dd3a4a" }}>
                      {error.msg}
                    </span>
                  )}
                </FormGroup>

                <Row>
                  <Col>
                    <Link to="/register">
                      <div className="text-muted font-italic">
                        <small>Créer un nouveau compte</small>
                      </div>
                    </Link>
                  </Col>
                  <Col>
                    <div className="text-center">
                      <Button color="primary" type="submit">
                        Se connecter
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Signin;
