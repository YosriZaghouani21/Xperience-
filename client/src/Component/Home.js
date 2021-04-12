import React from "react";
import AuthNavbar from "./layout/AuthNavbar";
import { Col, Row, Card, CardBody } from "reactstrap";
const Home = () => {
  return (
    <div className="main-content">
      <div className="header bg-white py-7 py-lg-6">
        <AuthNavbar />
        <Col lg="5" md="8" className="center " style={{ padding: "1%" }}>
          <h1 style={{ fontSize: "revert" }}>
            «Une <span style={{ color: "#f5365c " }}>idée</span> ne peut devenir
            <span style={{ color: "#11cdef  " }}> réalité</span> qu'une fois
            décomposée en éléments
            <span style={{ color: "#ffd600" }}> organisés </span>
            et exploitables.»
          </h1>
          <small>
            {" "}
            <b>Scott Belsky</b>
          </small>
        </Col>{" "}
        <Col lg="12" md="10">
          <Row className="mt-5">
            <Col lg="6" xl="3" style={{ marginBottom: "1%" }}>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "xxx-large" }}>
                      <i className="fab fa-angellist " />
                    </h1>
                    paragraphe
                  </Col>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3" style={{ marginBottom: "1%" }}>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "xxx-large" }}>
                      <i className="fab fa-angellist " />
                    </h1>
                    paragraphe
                  </Col>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3" style={{ marginBottom: "1%" }}>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "xxx-large" }}>
                      <i className="fab fa-angellist " />
                    </h1>
                    paragraphe
                  </Col>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3" style={{ marginBottom: "1%" }}>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "xxx-large" }}>
                      <i className="fab fa-angellist " />
                    </h1>
                    paragraphe
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Home;
