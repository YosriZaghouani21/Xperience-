/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

var ps;

const Advice3 = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {/* User */}
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <small>
            <b>
              <span className="text-info">Infos : </span>
              Langues parlées par <br />
              les tunisiens
            </b>
          </small>{" "}
          <Table className="align-items-center table-flush" responsive>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <span className="mr-2">Arabe</span>
                  <br />

                  <div className="d-flex align-items-center">
                    <span className="mr-2">88%</span>
                    <div>
                      <Progress
                        max="100"
                        value="88"
                        barClassName="bg-gradient-danger"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mr-2">Français</span>
                  <br />
                  <div className="d-flex align-items-center">
                    <span className="mr-2">40%</span>
                    <div>
                      <Progress
                        max="100"
                        value="40"
                        barClassName="bg-gradient-success"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mr-2">Anglais</span>
                  <br />
                  <div className="d-flex align-items-center">
                    <span className="mr-2">20%</span>
                    <div>
                      <Progress max="100" value="20" />
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="mr-2">Autres</span>
                  <br />
                  <div className="d-flex align-items-center">
                    <span className="mr-2">5%</span>
                    <div>
                      <Progress
                        max="100"
                        value="5"
                        barClassName="bg-gradient-warning"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <small>
            <b>
              <span className="text-info">Infos : </span> <br />
              La claustrophobie :
            </b>
            une panique de l’enfermement, des espaces clos : pièces petites ou
            sans fenêtre
            <br />
            <b>L'acrophobie :</b> une panique irrationnelle lorsque la personne
            se retrouve en hauteur ou face au vide.
          </small>{" "}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                ></button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship text-success" />
                Critères de qualité
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                <i className="ni ni-palette  text-danger" />
                Tarification
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                <i className="ni ni-ui-04  text-info" />
                Remboursement
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Advice3.defaultProps = {
  routes: [{}],
};

Advice3.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Advice3;
