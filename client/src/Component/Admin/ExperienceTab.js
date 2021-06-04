import React, {useState} from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Table,
} from 'reactstrap';
import classnames from 'classnames';
import CreatedExperienceAd from './CreatedExperienceAd';

const ExperienceTab = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '1'})}
            onClick={() => {
              toggle('1');
            }}
          >
            Créées
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '2'})}
            onClick={() => {
              toggle('2');
            }}
          >
            En cours de validation
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '3'})}
            onClick={() => {
              toggle('3');
            }}
          >
            acceptées
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '4'})}
            onClick={() => {
              toggle('4');
            }}
          >
            Refusées
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '5'})}
            onClick={() => {
              toggle('5');
            }}
          >
            Publiée{' '}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">{props.content1}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">{props.content2}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">{props.content3}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">{props.content4}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12">{props.content5}</Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ExperienceTab;
