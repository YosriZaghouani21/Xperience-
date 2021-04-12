import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../JS/actions";
//Boostrap
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
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
  const loginUser = (e) => {
    e.preventDefault();
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
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
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
                      <Button color="primary" type="button" onClick={loginUser}>
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
