import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences, getProfile, getUsers } from "../../JS/actions/index";
import CreatedExperienceAd from "./CreatedExperienceAd";
import Loader from "../layout/Loader";
import { useAlert } from "react-alert";
import { Redirect } from "react-router";

import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import SideBar from "../layout/SideBar";
import User from "../User";

// core components

const Index = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const experiences = useSelector(
    (state) => state.experiencesReducers.experiences
  );
  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const error = useSelector((state) => state.experiences);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getExperiences());
    dispatch(getProfile());
  }, [dispatch, alert, error]);
  return localStorage.getItem("token") ? (
    isLoading && loading ? (
      <Loader />
    ) : user && user.role === "admin" ? (
      <>
        {/* Page content */}
        <SideBar />
        <div className="main-content">
          <Container className="mt--7" fluid>
            <Row>
              <Col className="mb-5 mb-xl-0" xl="8">
                <Card className="bg-gradient-default shadow">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-light ls-1 mb-1">
                          Overview
                        </h6>
                        <h2 className="text-white mb-0">
                          Les expériences créées
                        </h2>
                      </div>
                      <div className="col"></div>
                    </Row>
                  </CardHeader>
                </Card>
              </Col>
              <Col xl="4">
                <Card className="shadow">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                          Performance
                        </h6>
                        <h2 className="mb-0">Total orders</h2>
                      </div>
                    </Row>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Les expériences créées</h3>
                      </div>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          See all
                        </Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>

                        <th scope="col">Titre</th>
                        <th scope="col">Type</th>
                        <th scope="col">Activité</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {experiences &&
                        experiences.map((experience) => (
                          <CreatedExperienceAd
                            key={experience._id}
                            experience={experience}
                          />
                        ))}
                    </tbody>
                  </Table>
                </Card>
              </Col>
              {/* <Col>
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Card tables</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Utilisateur</th>
                        <th scope="col">Status</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col" />
                      </tr>
                    </thead>

                    {users &&
                      users.map((user) => <User key={User._id} user={user} />)}
                  </Table>
                </Card>
              </Col>
           */}
            </Row>
          </Container>
        </div>
      </>
    ) : (
      <p></p>
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default Index;
