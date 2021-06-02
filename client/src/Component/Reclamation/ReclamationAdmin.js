import React, {useEffect, useState} from 'react';
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
} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import classnames from 'classnames';
import ReclamationAdminTemplate from './ReclamationAdminTemplate';
import {getProfile, getReclamations} from '../../JS/actions';
import Loader from '../layout/Loader';

const ReclamationAdmin = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const dispatch = useDispatch();
  const reclamations = useSelector(state => state.reclamationReducer.reclamations);
  const isLoading = useSelector(state => state.reclamationReducer.isLoading);
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);

  useEffect(() => {
    dispatch(getReclamations());
    dispatch(getProfile());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '1'})}
            onClick={() => {
              toggle('1');
            }}
          >
            Demande d'information
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({active: activeTab === '2'})}
            onClick={() => {
              toggle('2');
            }}
          >
            Signal d'un problème
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <h1 className="text-center m-3">
            Les réclamations relatives aux demandes d'informations
          </h1>
          <Row>
            {reclamations &&
              reclamations.map(
                (reclamation, index) =>
                  reclamation.type === 'question' && (
                    <Col sm="12" xl="4">
                      <ReclamationAdminTemplate
                        key={reclamation._id}
                        reclamation={reclamation}
                        index={index + 1}
                      />
                    </Col>
                  )
              )}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <h1 className="text-center m-3">Les réclamations relatives au signal d'un problème</h1>
            <Row>
              {reclamations &&
                reclamations.map(
                  (reclamation, index) =>
                    reclamation.type === 'problem' && (
                      <Col sm="12" xl="4">
                        <ReclamationAdminTemplate
                          key={reclamation._id}
                          reclamation={reclamation}
                          index={index + 1}
                        />
                      </Col>
                    )
                )}
            </Row>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ReclamationAdmin;
