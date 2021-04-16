import React from "react";
import AuthNavbar from "./layout/AuthNavbar";
import Footer from "./layout/Footer";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="main-content">
      <div className="header bg-white py-7 py-lg-6">
        <AuthNavbar />

        <Col lg="12" md="10">
          <Row>
            <Col lg="5">
              <img
                alt="..."
                src={require("../Assets/img/brand/creator4.png").default}
                style={{ width: "80%" }}
              />
            </Col>
            <Col lg="7">
              <Link>
                <CardTitle tag="h1" className=" mb-0 mt-9">
                  Vivre des expériences créées par <br /> des tunisiens
                  passionnées ?
                </CardTitle>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col lg="12" md="10">
          <Row>
            <Col lg="7">
              <Link to="/creator">
                <CardTitle tag="h1" className=" mb-0 mt-8 ml-7">
                  Proposer une initiation, un cours,
                  <br /> un atelier, un workshop ?
                </CardTitle>
              </Link>
            </Col>

            <Col lg="5">
              <img
                alt="..."
                src={require("../Assets/img/brand/creator3.png").default}
                style={{ width: "80%" }}
              />
            </Col>
          </Row>
        </Col>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
