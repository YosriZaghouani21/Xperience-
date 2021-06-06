import React from 'react';

import {Container} from 'reactstrap';
import SideBar from '../layout/SideBar';
import ReclamationAdmin from './ReclamationAdmin';

const Reclamations = () => {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Container className="mt-5" fluid>
          <ReclamationAdmin />
        </Container>
      </div>
    </>
  );
};

export default Reclamations;
