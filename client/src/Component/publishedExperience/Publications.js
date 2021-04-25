import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthNavbar from './layout/AuthNavbar';
import {getProfile} from '../JS/actions/index';
import Footer from './layout/Footer';
import {Col, Row, Card, CardBody, CardTitle} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

const Publication = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);

  return <></>;
};

export default Publication;
